const webhookUrl = 'https://discord.com/api/webhooks/1212764499157712927/HR5H26bp09yscH6divAzSPIAI1dzkv6uItkvANdzQJKMBa6p_QcAfeZ7pqepGLtx7Mn-';
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