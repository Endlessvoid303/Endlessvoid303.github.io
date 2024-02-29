const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
document.getElementById('shopform').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;

    // Send the username to Discord using the webhook URL
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `Username: ${username}`
        })
    });

    if (response.ok) {
        console.log('Username sent to Discord');
    } else {
        console.error('Failed to send username to Discord');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
  
    items.forEach(function(item) {
      const addButtons = item.querySelectorAll('.add-button');
      const removeButtons = item.querySelectorAll('.remove-button');
  
      addButtons.forEach(function(addButton) {
        addButton.addEventListener('click', function() {
          const currentAmountElement = this.parentElement.querySelector('.current-amount');
          const currentAmount = parseInt(currentAmountElement.textContent);
          currentAmountElement.textContent = currentAmount + 1;
        });
      });
  
      removeButtons.forEach(function(removeButton) {
        removeButton.addEventListener('click', function() {
          const currentAmountElement = this.parentElement.querySelector('.current-amount');
          const currentAmount = parseInt(currentAmountElement.textContent);
          if (currentAmount > 0) {
            currentAmountElement.textContent = currentAmount - 1;
          }
        });
      });
    });
  });