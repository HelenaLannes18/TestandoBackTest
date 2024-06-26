const express = require('express');
const app = express();

const port = process.env.PORT || 5002;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log('server started');
});
