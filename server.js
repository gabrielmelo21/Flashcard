/**
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/slag-app'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/slag-app/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Aplicativo Angular está rodando na porta ${port}`);
});

 **/
