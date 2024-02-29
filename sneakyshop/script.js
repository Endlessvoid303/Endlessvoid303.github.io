const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
const photoElement = document.getElementById('photo');
const photoAlt = photoElement.getAttribute('alt');

const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const currentAmountElement = document.querySelector('.current-amount');
const priceElement = document.querySelector('.price');

const cart = [];

addButton.addEventListener('click', () => {
  const item = {
    name: photoAlt,
    price: parseFloat(priceElement.textContent),
    quantity: 1
  };

  const index = cart.findIndex(i => i.name === item.name);
  if (index === -1) {
    cart.push(item);
  } else {
    cart[index].quantity++;
  }

  updateCart();
});

removeButton.addEventListener('click', () => {
  const item = {
    name: photoAlt,
    price: parseFloat(priceElement.textContent)
  };

  const index = cart.findIndex(i => i.name === item.name);
  if (index !== -1 && cart[index].quantity > 0) {
    cart[index].quantity--;
  }

  updateCart();
});

function updateCart() {
  let totalPrice = 0;
  let cartHtml = '';

  cart.forEach(item => {
    const itemPrice = item.price * item.quantity;
    totalPrice += itemPrice;

    cartHtml += `<p>${item.name}: ${item.quantity} x $${item.price.toFixed(2)} = $${itemPrice.toFixed(2)}</p>`;
  });

  currentAmountElement.innerHTML = cart.length;
  priceElement.innerHTML = `$${totalPrice.toFixed(2)}`;
  document.querySelector('.cart').innerHTML = cartHtml;
}

function sendMessage() {
  const username = document.getElementById('username').value;

  if (!username) {
    // Show alert if username or message is not entered
    alert('Please enter a username and a message.');
    return;
  }

  let content = '';
  cart.forEach(item => {
    const itemPrice = item.price * item.quantity;
    content += `Item: ${item.name}\nAmount: ${item.quantity}\nPrice per item: $${item.price.toFixed(2)}\nTotal price: $${itemPrice.toFixed(2)}\n\n`;
  });

  const data = {
    username: username,
    content: content
  };

  // Show success bar while sending message
  const successBar = document.createElement('div');
  successBar.classList.add('success-bar');
  successBar.textContent = 'Message sent successfully!';
  document.body.appendChild(successBar);
  successBar.style.display = 'block';

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}