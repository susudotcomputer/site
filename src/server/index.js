const express = require('express');
const app = express();

app.use(express.static(__dirname + './../../')); //serves the index.html

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: './' });
});

const port = 8000;
app.listen(port, function() {
  console.log('server listening on port ' + port);
});
