function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'Menu: Crafted with Fire!';

  const list = document.createElement('ul');

  const items = [
    {
      name: "Steve's Lava Chicken",
      desc: "Spicy grilled chicken, marinated in our secret Nether sauce. Served with obsidian fries.",
      img: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Chicken_JE3_BE3.png'
    },
    {
      name: "Jack Black's Blocky BBQ",
      desc: "Chunky chicken cubes, glazed in smoky BBQ, stacked high and mighty. A bard's favorite!",
      img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: "Redstone Hot Wings",
      desc: "Wings so hot, they'll power your circuits! Served with cool ranch dip.",
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: "Creeper's Green Salad",
      desc: "A fresh, explosive mix of greens, emerald avocados, and lime vinaigrette.",
      img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: "Golden Apple Pie",
      desc: "Sweet apple pie with a golden, enchanted crust. Restores 4 hunger bars!",
      img: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80'
    }
  ];

  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="menu-item">
        <img src="${item.img}" alt="${item.name}">
        <div>
          <strong>${item.name}</strong><br>
          <span>${item.desc}</span>
        </div>
      </div>
    `;
    list.appendChild(li);
  });

  content.appendChild(headline);
  content.appendChild(list);
}

export default loadMenu;