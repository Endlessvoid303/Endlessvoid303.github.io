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