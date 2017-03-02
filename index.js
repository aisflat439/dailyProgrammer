const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3333));

app.listen(app.get('port'), function () {
  console.log('running on port', app.get('port'))
})

app.get('/', function (req, res) {
    res.send('Does this work?');
});
