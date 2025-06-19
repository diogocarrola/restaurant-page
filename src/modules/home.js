function loadHome() {
  const content = document.getElementById('content');
  // Clear previous content
  content.innerHTML = '';

  // Create headline
  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Gourmet Haven!';

  // Create image
  const image = document.createElement('img');
  image.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80';
  image.alt = 'Restaurant interior';
  image.style.width = '300px';

  // Create description
  const desc = document.createElement('p');
  desc.textContent = 'Experience the finest cuisine in a cozy atmosphere. Fresh ingredients, creative dishes, and friendly service await you!';

  // Append elements
  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(desc);
}

export default loadHome;