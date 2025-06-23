function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'Menu: Crafted with Fire!';

  const list = document.createElement('ul');

  const items = [
    {
      name: "Steve's Lava Chicken",
      desc: "Spicy grilled chicken, marinated in our secret Nether sauce. Served with obsidian fries."
    },
    {
      name: "Jack Black's Blocky BBQ",
      desc: "Chunky chicken cubes, glazed in smoky BBQ, stacked high and mighty. A bard's favorite!"

    },
    {
      name: "Redstone Hot Wings",
      desc: "Wings so hot, they'll power your circuits! Served with cool ranch dip."
    },
    {
      name: "Creeper's Green Salad",
      desc: "A fresh, explosive mix of greens, emerald avocados, and lime vinaigrette."
    },
    {
      name: "Golden Apple Pie",
      desc: "Sweet apple pie with a golden, enchanted crust. Restores 4 hunger bars!"
    }
  ];

  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="menu-item">
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