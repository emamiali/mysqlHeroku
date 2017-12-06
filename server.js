const express = require('express');
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send({ message: "Hello World"});
});

app.listen(PORT, () => {
  console.log('Listening on: ', PORT);
});
