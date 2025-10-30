// dashboard.js

// --- CONFIGURATION ---
// IMPORTANT: Replace this with your actual backend server URL!
const API_BASE_URL = 'http://your-backend-server.com/api'; 
const MAP_CENTER = [28.6139, 77.2090]; // New Delhi, India

// --- 1. Initialize Map ---
const map = L.map('mapid').setView(MAP_CENTER, 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// --- 2. Function to Handle Button Actions ---
function handleIssueAction(event) {
    const button = event.target;
    const card = button.closest('.issue-card');
    const issueId = card ? card.getAttribute('data-issue-id') : null; 
    
    if (!issueId) return console.error('Issue ID not found.');

    if (button.classList.contains('resolve-btn')) {
        alert(`API CALL: Marking issue ${issueId} as resolved.`);
        // In production: fetch(`${API_BASE_URL}/issues/${issueId}/resolve`, { method: 'PUT' });
    } else if (button.classList.contains('view-details')) {
        // Redirect to pending page to view full details
        window.location.href = `pending_issues.html?issueId=${issueId}`;
    }
}

// --- 3. Function to Fetch and Populate Statistics ---
async function loadDashboardStats() {
    // Placeholder Data (Replace with API call to /api/dashboard/summary)
    const data = { pending: 260, resolved: 1250, locations: 48 }; 
    document.getElementById('pending-count').textContent = data.pending;
    document.getElementById('resolved-count').textContent = data.resolved;
    document.getElementById('active-locations-count').textContent = data.locations;
}

// --- 4. Function to Fetch and Populate Recent Issues and Map Markers ---
async function loadRecentIssues() {
    const issueListContainer = document.querySelector('.issue-list');
    issueListContainer.innerHTML = ''; 

    // Placeholder data array (Replace with API call to /api/dashboard/recent-issues)
    const issues = [
        { id: 'I001', title: 'Pothole on Main Street', location: 'Downtown', status: 'pending', reportedAgo: '2 days ago', lat: 28.62, lng: 77.21 },
        { id: 'I002', title: 'Broken Streetlight - Elm Ave', location: 'North Side', status: 'resolved', reportedAgo: '3 days ago', lat: 28.6, lng: 77.19 }
    ];

    issues.forEach(issue => {
        // Dynamically create the issue card element
        const cardHtml = `
            <div class="issue-card ${issue.status}" data-issue-id="${issue.id}">
                <h3>${issue.title}</h3>
                <p><strong>Location:</strong> ${issue.location}</p>
                <p><strong>Status:</strong> ${issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}</p>
                <p><strong>Reported:</strong> ${issue.reportedAgo}</p>
                <button class="btn resolve-btn">Mark as Resolved</button>
                <button class="btn view-details">View Details</button>
            </div>
        `;
        issueListContainer.innerHTML += cardHtml;

        // Add map marker
        L.marker([issue.lat, issue.lng]).addTo(map)
            .bindPopup(`<b>${issue.title}</b><br>Status: ${issue.status}`);
    });
    
    // Attach event listeners after loading content
    document.querySelectorAll('.issue-card button').forEach(button => {
        button.addEventListener('click', handleIssueAction);
    });
}

// EXECUTION
document.addEventListener('DOMContentLoaded', () => {
    loadDashboardStats();
    loadRecentIssues();
});
