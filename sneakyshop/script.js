const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const itemAmount = document.querySelector('.current-amount');
const form = document.querySelector('#shopform');
const order = [];
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
  const item = document.getElementById('item-image').alt;
  itemAmount.innerText = amount;
  // Check if the item is already in the order list
  if (!order.includes(item)) {
    // Add the item to the order list
    order.push(item);

    // Update the order element of the form
    document.getElementById('order').innerHTML = order;
  }
});

removeButton.addEventListener('click', () => {
  let amount = parseInt(itemAmount.innerText);
  const item = document.getElementById('item-image').alt;
  if (amount > 0) {
    amount--;
    itemAmount.innerText = amount;
  }
  if (amount === 0) {
    const index = order.indexOf(item);
    if (index > -1) {
      order.splice(index, 1);
    }

    // Update the order element of the form
    document.getElementById('order').innerHTML = order;
  }
});
