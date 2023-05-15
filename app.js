const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.use(express.static('public'));

const handlebars = exphbs.create({
    defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

const main = require('./routes/main')

app.use('/',main)
app.listen(port, hostname, () => {
    console.log(`server is running, http://${hostname}:${port}`)
})
