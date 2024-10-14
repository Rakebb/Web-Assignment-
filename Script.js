fetch('path/to/yourfile.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Use your JSON data here
  })
  .catch(error => console.error('Error loading JSON:', error));

document.getElementById('home-btn').addEventListener('click', function() {
    document.getElementById('about').style.display = 'block';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('education').style.display = 'none';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
});

document.getElementById('portfolio-btn').addEventListener('click', function() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('education').style.display = 'block';
    document.getElementById('experience').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
});

document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('education').style.display = 'none';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
});

// Initial display setting
document.getElementById('projects').style.display = 'none';
document.getElementById('education').style.display = 'none';
document.getElementById('experience').style.display = 'none';
document.getElementById('contact').style.display = 'none';

function navigateToProject(event, url) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = url; // Navigate to the project page
}