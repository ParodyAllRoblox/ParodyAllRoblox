const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/home.html'))
});

app.get('/test', (req, res) => {
  // make sure your discord.js client is available somewhere in this file
  res.json({
    tag: client.user.tag
  });
});

app.use(bodyparser.text())
app.listen(3000, () => {
  console.log('server started');
});