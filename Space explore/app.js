document.addEventListener('DOMContentLoaded', () => {
    const loadImageButton = document.getElementById('loadImageButton');
    const mapContainer = document.getElementById('map');
  
    loadImageButton.addEventListener('click', fetchAPOD);
  
    function fetchAPOD() {
      const apiKey = 'DWyBx7n2IeJjarTjZPmoEysf4jY6zdG09lfngjQR'; // Replace with your NASA API key
      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayAPOD(data))
        .catch(error => console.error('Error fetching APOD:', error));
    }
  
    function displayAPOD(data) {
      mapContainer.innerHTML = `<img src="${data.url}" alt="${data.title}" style="object-fit: cover;">`;
    }
  
    // Initial load on page load
    fetchAPOD();
  });