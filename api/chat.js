// Vercel serverless function to handle chatbot requests and bypass CORS
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ 
        error: 'Message is required',
        response: 'Please provide a message to send.'
      });
    }

    console.log('Forwarding message to n8n production webhook:', message);

    // Forward request to n8n production webhook
    const response = await fetch('https://wonder4.app.n8n.cloud/webhook/ad30832c-1f6b-4293-8eec-85490817e62d', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log('n8n production response:', data);
    
    // Return the response from n8n
    return res.status(200).json(data);
  } catch (error) {
    console.error('Webhook proxy error:', error);
    return res.status(500).json({ 
      error: 'Failed to process request',
      response: "Sorry, I'm having trouble connecting right now. Please try again later."
    });
  }
}