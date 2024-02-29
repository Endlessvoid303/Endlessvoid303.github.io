const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
const photoElement = document.getElementById('photo');
const photoAlt = photoElement.getAttribute('alt');

const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const currentAmountElement = document.querySelector('.current-amount');
const priceElement = document.querySelector('.price');

const cart = [];

function updateCurrentAmount() {
    const cart = document.querySelector('.cart');
    const currentAmount = document.querySelector('.current-amount');
    const cartItems = cart.querySelectorAll('.item-content');
    let totalAmount = 0;
    cartItems.forEach(item => {
      const amount = parseInt(item.querySelector('.current-amount').textContent);
      totalAmount += amount;
    });
    currentAmount.innerHTML = totalAmount;
  }
  
  document.querySelectorAll('.add-button').forEach(button => {
    button.addEventListener('click', event => {
      const itemContent = event.target.parentElement;
      const currentAmount = itemContent.querySelector('.current-amount');
      currentAmount.textContent = parseInt(currentAmount.textContent) + 1;
      updateCurrentAmount();
    });
  });
  
  document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', event => {
      const itemContent = event.target.parentElement;
      const currentAmount = itemContent.querySelector('.current-amount');
      if (parseInt(currentAmount.textContent) > 0) {
        currentAmount.textContent = parseInt(currentAmount.textContent) - 1;
      }
      updateCurrentAmount();
    });
  });
  
  function sendMessage() {
    const username = document.getElementById('username').value;
    const cart = document.querySelector('.cart');
    const message = {
      username: username,
      content: cart.innerHTML,
    };
  
    // Send the message to the server
    fetch('https://your-webhook-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }