const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const itemAmount = document.querySelector('.current-amount');
const orderspace = document.getElementById('order');
const form = document.querySelector('#shopform');
var items = document.querySelectorAll('.item');
let order = {};
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
for (var i = 0; i < items.length; i++) {
    const item = items[i]
    const itemname = item.getAttribute('alt')
    const addButton = item.querySelector('.add-button');
    const removeButton = item.querySelector('.remove-button');
    const itemAmount = item.querySelector('.current-amount');
    addButton.addEventListener('click', () => {
        let amount = parseInt(itemAmount.innerText);
        amount++;
        itemAmount.innerText = amount;
        order[itemname] = amount
        if (order[itemname] === 0) {
            delete order[itemname]
        }
        orderspace.innerHTML = JSON.stringify(order)
      });
    removeButton.addEventListener('click', () => {
        let amount = parseInt(itemAmount.innerText);
        if (amount > 0) {
        amount--;
        itemAmount.innerText = amount;
        order[itemname] = amount
        }
        if (order[itemname] === 0) {
            delete order[itemname]
        }
        orderspace.innerHTML = JSON.stringify(order)
    });
  }

