const express =require('express');
const cors = require('cors');
const axios = require('axios');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  axios.get(req.query.url)
    .then(data => res.send(data.data));
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});