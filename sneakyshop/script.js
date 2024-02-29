const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const itemAmount = document.querySelector('.current-amount');
const form = document.querySelector('shopform');
const usernameInput = document.getElementById('username');
const orderTextarea = document.getElementById('order');
const totalPriceTextarea = document.getElementById('total-prices');
const cart = document.querySelector('.cart');
const items = document.querySelectorAll('.item-content');

let order = [];
function sendMessage() {
    const username = encodeURIComponent(document.getElementById('username').value);
    const order = encodeURIComponent(document.getElementById('order').value);
    const totalPrice = encodeURIComponent(document.getElementById('total-price').value);
    const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';

    const message = `**Username:** ${username}\n**Order:** ${order}\n**Total Price:** ${totalPrice}`;

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: message })
    })
    .then(response => {
      console.log('Message sent to Discord:', message);
      // Redirect to a thank-you page, reset the form, etc.
    })
    .catch(error => {
      console.error('Error sending message to Discord:', error);
      // Show an error message, etc.
    });
}
items.forEach(item => {
    const addButton = item.querySelector('.add-button');
    const removeButton = item.querySelector('.remove-button');
  
    addButton.addEventListener('click', () => {
      const name = item.querySelector('img').alt;
      const price = parseFloat(item.querySelector('.price').innerText.replace('$', ''));
      const currentAmount = parseInt(item.querySelector('.current-amount').innerText);
  
      item.querySelector('.current-amount').innerText = currentAmount + 1;
      updateOrder(name, price, 1, 'add');
      updateTotalPrice(price, 'add');
    });
  
    removeButton.addEventListener('click', () => {
      const name = item.querySelector('img').alt;
      const price = parseFloat(item.querySelector('.price').innerText.replace('$', ''));
      const currentAmount = parseInt(item.querySelector('.current-amount').innerText);
  
      if (currentAmount > 1) {
        item.querySelector('.current-amount').innerText = currentAmount - 1;
        updateOrder(name, price, -1, 'remove');
        updateTotalPrice(price, 'remove');
      }
    });
  });
function updateOrder(name, price, quantity, operation) {
    let itemIndex = order.findIndex(item => item.name === name);
    if (operation === 'add') {
      if (itemIndex === -1) {
        order.push({ name, quantity: 1, price });
      } else {
        order[itemIndex].quantity++;
      }
    } else if (operation === 'remove') {
      if (itemIndex === -1) return;
      if (order[itemIndex].quantity > 1) {
        order[itemIndex].quantity--;
      } else {
        order.splice(itemIndex, 1);
      }
    }
  }
function updateTotalPrice(price, operation) {
  let totalPrice = parseFloat(totalPriceTextarea.value);
  if (operation === 'add') {
    totalPrice += price;
  } else {
    totalPrice -= price;
  }
  totalPriceTextarea.value = '$' + totalPrice.toFixed(2);
}

function updateOrderTextarea() {
  let orderString = '';
  order.forEach(item => {
    orderString += `${item.quantity} ${item.name}\n`;
  });
  orderTextarea.value = orderString;
}