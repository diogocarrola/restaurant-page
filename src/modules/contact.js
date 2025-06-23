function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'Contact the Roost';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: (555) 123-BLOCK';

  const address = document.createElement('p');
  address.textContent = '123 Nether Brick Road, Overworld City';

  const form = document.createElement('form');
  form.innerHTML = `
    <label>Name: <input type="text" name="name" placeholder="Steve or Alex?"></label><br>
    <label>Message: <textarea name="message" placeholder="Book a table or send us a quest!"></textarea></label><br>
    <button type="submit">Send via Minecart</button>
  `;

  content.appendChild(headline);
  content.appendChild(phone);
  content.appendChild(address);
  content.appendChild(form);
}

export default loadContact;