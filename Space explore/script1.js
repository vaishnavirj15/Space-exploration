document.addEventListener('DOMContentLoaded', () => {
  const apiKey = '64856216d74546759056ba50edbd0704';
  const apiUrl = `https://newsapi.org/v2/everything?q=space%20exploration%20astronomy&apiKey=${apiKey}`;
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayNews(data.articles))
      .catch(error => console.error('Error fetching news:', error));
});

function displayNews(articles) {
  const newsSection = document.getElementById('news-section');
  articles.forEach(article => {
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      newsCard.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsSection.appendChild(newsCard);
  });
}