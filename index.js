const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.post('/api/final', async function (req, res) {
  const decodedString = JSON.parse(Buffer.from(String(req.body.cres), 'base64').toString('utf8'));
  console.log('inside final portion--------------', req.body.cres, decodedString);
  // console.log("decoded", decodedString.merchantTransID, decodedString)
  res.render('index', { data: decodedString.acsTransID });
  res.json({ message: `Payment successful for finale ${decodedString}` });
  res.send({message: "complete"})
});

// // Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});