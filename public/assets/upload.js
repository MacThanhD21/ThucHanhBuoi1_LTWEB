document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);

  fetch('upload.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      console.log(data); // Handle response from upload.php
      // You can add any additional logic here after successful upload
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
