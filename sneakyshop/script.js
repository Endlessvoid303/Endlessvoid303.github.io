const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
const addButtons = document.querySelectorAll('.add-button');
const removeButtons = document.querySelectorAll('.remove-button');
const cart = document.querySelector('.cart');
const totalPrice = document.getElementById('total-price');

let currentAmounts = [];
let prices = [];
document.getElementById('shopform').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const order = document.getElementById('order').value;
    // Send the username to Discord using the webhook URL
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `Username: ${username} Ordered: ${order}`
        })
    });

    if (response.ok) {
        console.log('Username sent to Discord');
    } else {
        console.error('Failed to send username to Discord');
    }
});

// Initialize current amounts and prices arrays
addButtons.forEach((button, index) => {
  currentAmounts.push(0);
  prices.push(parseFloat(button.closest('.item').querySelector('.price').innerText.replace('$', '')));
});

// Add event listeners to buttons
addButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentAmounts[index]++;
    updateCart(index);
    updateTotalPrice();
  });
});

removeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (currentAmounts[index] > 0) {
      currentAmounts[index]--;
      updateCart(index);
      updateTotalPrice();
    }
  });
});

// Update cart display
function updateCart(index) {
    console.log('Updating cart for index', index);
    console.log('Cart element:', cart);
    const cartItem = cart.querySelector(`.item-content:nth-child(${index + 1})`);
    if (cartItem === null) {
      console.error(`Cannot find item-content element ${index + 1}`);
      return;
    }
    console.log('Cart item:', cartItem);
    cartItem.querySelector('.current-amount').innerText = currentAmounts[index];
  }

// Update total price display
function updateTotalPrice() {
  let total = 0;
  currentAmounts.forEach((amount, index) => {
    total += amount * prices[index];
  });
  totalPrice.innerText = `$${total.toFixed(2)}`;
}