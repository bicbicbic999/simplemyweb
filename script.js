// Function to load content from the external text file and inject it into the page
function loadContent() {
    fetch('content.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content.txt').innerText = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Load content when the page is loaded
window.onload = loadContent;
