function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = "Steve & Jack's Lava Roost";

  const image = document.createElement('img');
  image.src = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Chicken_JE3_BE3.png'; // Minecraft chicken
  image.alt = 'Minecraft Chicken';
  image.style.width = '180px';

  const desc = document.createElement('p');
  desc.textContent =
    "Welcome to the hottest chicken joint in the Overworld! Steve & Jack's Lava Roost serves up legendary lava-fired chicken, blocky bites, and pixel-perfect fun. Whether you're a Redstone engineer or a wandering bard, our menu will power up your hunger bar!";

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(desc);
}

export default loadHome;