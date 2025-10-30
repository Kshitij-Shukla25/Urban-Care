// Report JS
// Auto-location
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(function(pos) {
    document.getElementById('geoLocation').textContent =
      `Lat: ${pos.coords.latitude.toFixed(4)}, Lng: ${pos.coords.longitude.toFixed(4)}`;
  }, function() {
    document.getElementById('geoLocation').textContent = "Location unavailable.";
  });
} else {
  document.getElementById('geoLocation').textContent = "Location not supported.";
}

// Image preview
document.getElementById('imgInput').onchange = function(event) {
  let file = event.target.files[0];
  if (file){
    let reader = new FileReader();
    reader.onload = function(e){
      document.getElementById('imgPreview').innerHTML =
        `<img src="${e.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(file);
  }
};

// Form submit
document.getElementById('issueForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('confirmation').textContent = "Issue submitted successfully!";
};
