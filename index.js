const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./routes/users')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);