const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

// Default route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the BFHL API. Use the /bfhl endpoint.');
});

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const user_id = "nityam_bhargava_02031999"; // replace with actual user ID
  const email = "nityam@srmist.edu.in"; // replace with actual email
  const roll_number = "SRM12345"; // replace with actual roll number

  let numbers = [];
  let alphabets = [];
  let highest_alphabet = [];

  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === 'string' && item.length === 1 && /[a-zA-Z]/.test(item)) {
      alphabets.push(item);
    }
  });

  if (alphabets.length > 0) {
    highest_alphabet = [alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]];
  }

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
});

app.listen(port, () => {
  console.log('Server running on port ${port}');
});