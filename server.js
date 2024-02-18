const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const PORT = 3000;

app.use(cors());

// Mock data for patent information
const patentData = {
  patentNumber: 'US12345678',
  title: 'Sample Patent',
  inventor: 'John Doe',
  dateFiled: '2023-01-01',
};

const baseUrl = 'https://bulkdata.uspto.gov:443/BDSS-API';

// Endpoint for getting patent informations
app.get('/api/get_patent', (req, res) => {
   const {patentNumber} = req.query;
   const url = `${baseUrl}/products/${patentNumber}`;
   axios.get(url)
    .then(response => {
      const data = response.data;
      res.json(data);
    });
});

// get all latest patents
app.get('/api/get_patents', (req, res) => {
    console.log(req.query);
    const url = `${baseUrl}/products/all/latest`
    axios.get(url)
    .then(response => {
      const data = response.data;
      res.json(data);
});
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// app.use(bodyParser.json());
// app.use(cors());

// // Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//
//
//
//
//

// const bcrypt = require('bcrypt');
// const users = [
//   { id: 1, username: 'user1', password: 'hhhhhhhhhhhhhhhhhhhhhh' }
// ];

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find(u => u.username == username);
//   if (!user || !bcrypt.compareSync(password, user.password)) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   // Generate a token or use a session to manage authentication
//   const token = 'your_jwt_token_here';
//   res.json({ token });
// });