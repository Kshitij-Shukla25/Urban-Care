// Show modal when Get Started is clicked
document.getElementById("getStartedBtn").onclick = function () {
  document.getElementById("userTypeModal").style.display = "flex";
};
document.getElementById("closeModal").onclick = function () {
  document.getElementById("userTypeModal").style.display = "none";
};

// Handle User/Admin button clicks
document.getElementById("userBtn").onclick = function () {
  window.location.href = "./user/dashboard/dashboard.html"; // Put your user portal URL here
};
document.getElementById("adminBtn").onclick = function () {
  window.location.href = "./admin/index.html"; // Correct relative path
};

// Close modal when clicking outside content
window.onclick = function(event) {
  let modal = document.getElementById("userTypeModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
