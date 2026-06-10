require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ type: ['application/json', 'text/plain'] }));

app.get('/api/ping', (req, res) => {
  res.json({ ok: true, port: process.env.PORT, hasKey: !!process.env.NVIDIA_API_KEY, cwd: process.cwd(), dirname: __dirname });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const systemPrompt = {
      role: 'system',
      content: `You are Agni AI, a knowledgeable Vastu Shastra expert assistant for Agniyantra — a premium store selling certified Vastu remedies (metal strips, energy studs, helixes, correction dust, etc.).

Your role:
- Answer questions about Vastu Shastra principles (five elements, directions, floor plan corrections).
- Recommend specific Agniyantra products based on the user's description of their home or office layout issues.
- Explain how different metals (copper, brass, stainless steel, iron, aluminium, lead, zinc, panchdhatu) correspond to elemental corrections.
- Be concise, clear, and helpful. Keep responses to 3-4 paragraphs max.
- Always mention relevant Agniyantra products when recommending solutions.
- If asked something outside Vastu or home remedies, politely redirect to Vastu topics.

Products available:
- Stainless Steel Strip (10.2ft) — for West/Northwest space element corrections
- Copper Strip (8ft) — for Southeast/South fire element corrections  
- Brass Strip (10.2ft) — for Southwest/Center earth element corrections
- Aluminium Strip (10.2ft) — for East/Northeast air element corrections
- Iron Strip (10.2ft) — for West/Northwest space element corrections
- Brass Energy Stud (3") — earth stabilizers for Southwest zone
- Gold Plated Energy Stud (1.5") — cosmic amplifiers for Northeast/East
- Iron Energy Stud (3") — space element stabilizers
- Lead Energy Stud (2") — Southwest corner anomalies
- Zinc Helix — North-East water element corrections
- Copper Pyramid Chip Set — fire element energy concentrators
- Panch Dhatu Correction Dust (1kg) — universal foundation remedy
- Multi-Metal Energy Strip Kit — comprehensive all-zone correction`
    };

    const messages = [systemPrompt];
    if (history && Array.isArray(history)) {
      messages.push(...history);
    }
    messages.push({ role: 'user', content: message });

    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NVIDIA_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'google/diffusiongemma-26b-a4b-it',
        messages,
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 0.9
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('NVIDIA API error:', response.status, errText);
      return res.status(response.status).json({ error: 'AI service error', detail: errText });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'I apologize, I could not generate a response. Please try again.';

    res.json({ reply });

  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve static files AFTER API routes
app.use(express.static(path.join(__dirname, '..')));

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Agniyantra server running on http://localhost:${PORT}`);
});
