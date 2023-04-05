const express =require('express');
const http = require('http');
const cors = require('cors');
const axios = require('axios');

// if (process.env.NODE_ENV === 'development') {
//   require('dotenv').config();
// }

const app = express();
app.set('port', 5000);

app.use(cors());

app.get("/", (req, res) => {
  if (req.query.url) {
    axios.get(req.query.url)
    .then(data => res.send(data.data));
  } else {
    res.send('Hello world');
  }
});

const server = http.createServer(app);

server.listen(5001, () => {
  console.log("Listening on port 5001");
});