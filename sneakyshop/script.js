const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';

function sendMessage() {
  const username = document.getElementById('username').value;
  const messageText = document.getElementById('message').value;

  if (!username || !messageText) {
    // Show alert if username or message is not entered
    alert('Please enter a username and a message.');
    return;
  }

  const data = {
    username: username,
    content: messageText
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
const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const currentAmountElement = document.querySelector('.current-amount');
const priceElement = document.querySelector('.price');

let currentAmount = parseInt(currentAmountElement.textContent);

addButton.addEventListener('click', () => {
  currentAmount++;
  currentAmountElement.textContent = currentAmount;
  updatePrice();
});

removeButton.addEventListener('click', () => {
  if (currentAmount > 0) {
    currentAmount--;
    currentAmountElement.textContent = currentAmount;
    updatePrice();
  }
});

function updatePrice() {
  const price = parseFloat(priceElement.textContent.slice(1));
  priceElement.textContent = '$' + (currentAmount * price).toFixed(2);
}