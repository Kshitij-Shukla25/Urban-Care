// History JS
const reports = [
  { date: "2025-10-28", type:"Pothole", status:"Closed", details:"Near Park Ave." },
  { date: "2025-10-29", type:"Streetlight", status:"Open", details:"Main Street"},
  { date: "2025-10-30", type:"Trash Overflow", status:"Resolved", details:"Sector 9"},
];
const tbody = document.querySelector('#reportTable tbody');
reports.forEach(r => {
  tbody.innerHTML += `
    <tr>
      <td>${r.date}</td>
      <td>${r.type}</td>
      <td>${r.status}</td>
      <td>${r.details}</td>
    </tr>
  `;
});
