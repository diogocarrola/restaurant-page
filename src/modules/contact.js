function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Us';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: (123) 456-7890';

  const address = document.createElement('p');
  address.textContent = '123 Flavor Street, Food City';

  const form = document.createElement('form');
  form.innerHTML = `
    <label>Name: <input type="text" name="name"></label><br>
    <label>Message: <textarea name="message"></textarea></label><br>
    <button type="submit">Send</button>
  `;

  content.appendChild(headline);
  content.appendChild(phone);
  content.appendChild(address);
  content.appendChild(form);
}

export default loadContact;