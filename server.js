const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./dist/basic-angular-with-database'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {
    root: 'dist/basic-angular-with-database/'
  });
});

app.listen(process.env.PORT || 8080);
