const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const itemAmount = document.querySelector('.current-amount');
const form = document.querySelector('#shopform');
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
addButton.addEventListener('click', () => {
  let amount = parseInt(itemAmount.innerText);
  amount++;
  itemAmount.innerText = amount;
  updateFormPrice(form, 10.00);
});

removeButton.addEventListener('click', () => {
  let amount = parseInt(itemAmount.innerText);
  if (amount > 0) {
    amount--;
    itemAmount.innerText = amount;
    updateFormPrice(form, -10.00);
  }
});

function updateFormPrice(form, priceChange) {
  let currentPrice = parseFloat(form.elements['total-prices'].value);
  currentPrice += priceChange;
  form.elements['total-prices'].value = currentPrice.toFixed(2);
}