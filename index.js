const express =require('express');
const http = require('http');
const cors = require('cors');
const axios = require('axios');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const app = express();
app.set('port', 5000);

app.use(cors());

app.get("/", (req, res) => {
  axios.get(req.query.url)
  .then(data => res.send(data.data));
});

const server = http.createServer(app);

server.listen(5001, () => {
  console.log("Listening on port 5001");
});