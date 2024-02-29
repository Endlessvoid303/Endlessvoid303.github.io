document.addEventListener('DOMContentLoaded', () => {
    const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
    const addButtons = document.querySelectorAll('.add-button');
    const removeButtons = document.querySelectorAll('.remove-button');
    const cart = document.querySelector('.cart');
    const totalPrice = document.getElementById('total-price');
  
    let currentAmounts = [];
    let prices = [];
  
    document.getElementById('shopform').addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const order = document.getElementById('order').value;
  
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
  
    addButtons.forEach((button, index) => {
      currentAmounts.push(0);
      prices.push(parseFloat(button.closest('.item').querySelector('.price').innerText.replace('$', '')));
  
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
  
    function updateCart(index) {
      const cartItem = cart.querySelector(`.cart > .item-content:nth-child(${index + 1})`);
      cartItem.querySelector('.current-amount').innerText = currentAmounts[index];
    }
  
    function updateTotalPrice() {
      let total = 0;
      currentAmounts.forEach((amount, index) => {
        total += amount * prices[index];
      });
      totalPrice.innerText = `$${total.toFixed(2)}`;
    }
  });