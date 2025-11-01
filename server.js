const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('BreachCheck API Running');
})

app.post('/check-password', async (req, res) => {
    try {
      const { prefix, suffix } = req.body;
  
      const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
      const text = await response.text();
      const lines = text.split('\n');
      const match = lines.find(line => line.startsWith(suffix.toUpperCase()));
  
      if (match) {
        const count = match.split(':')[1].trim();
        return res.json({ status: 'success', breached: true, count });
      } else {
        return res.json({ status: 'success', breached: false });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

module.exports = app;