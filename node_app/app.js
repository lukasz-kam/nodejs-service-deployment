const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

const port = 80;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});