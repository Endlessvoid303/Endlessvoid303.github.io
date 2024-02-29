const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
const photoElement = document.getElementById('photo');
const photoAlt = photoElement.getAttribute('alt');

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
    content: `Item: ${photoAlt}\nAmount: ${currentAmount}\nPrice per item: ${priceElement.textContent}\nTotal price: ${currentAmount * parseFloat(priceElement.textContent)}`
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
});

removeButton.addEventListener('click', () => {
  if (currentAmount > 0) {
    currentAmount--;
    currentAmountElement.textContent = currentAmount;
  }
});