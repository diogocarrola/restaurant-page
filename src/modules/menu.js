function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  const list = document.createElement('ul');

  const items = [
    { name: 'Margherita Pizza', desc: 'Classic pizza with tomato, mozzarella, and basil.' },
    { name: 'Truffle Pasta', desc: 'Homemade pasta with creamy truffle sauce.' },
    { name: 'Chocolate Lava Cake', desc: 'Warm chocolate cake with a gooey center.' }
  ];

  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.name}</strong>: ${item.desc}`;
    list.appendChild(li);
  });

  content.appendChild(headline);
  content.appendChild(list);
}

export default loadMenu;