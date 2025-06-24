import lavaChicken from '../assets/lava-chicken.jpg';

function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = "Steve & Jack's Lava Roost";

  const image = document.createElement('img');
  image.src = lavaChicken;
  image.alt = 'Steve\'s Lava Chicken';
  image.style.width = '80%';
  image.style.maxWidth = '400px';
  image.style.display = 'block';
  image.style.margin = '2rem auto';

  const desc = document.createElement('p');
  desc.textContent =
    "Welcome to the hottest chicken joint in the Overworld! Steve & Jack's Lava Roost serves up legendary lava-fired chicken, blocky bites, and pixel-perfect fun. Whether you're a Redstone engineer or a wandering bard, our menu will power up your hunger bar!";

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(desc);
}

export default loadHome;