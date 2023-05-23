const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

mongoose.connect('mongodb://127.0.0.1:27017/test_db')
  .then(() => console.log('Connected!'));


app.use(fileUpload());

app.use(express.static('public'));

const handlebars = exphbs.create({
  defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const myMiddleware = (req, res, next) => {
  console.log("running");
  next();
}

app.use('/', myMiddleware);

const main = require('./routes/main');
const posts = require('./routes/posts');
app.use('/', main);
app.use('/posts', posts);

app.listen(port, hostname, () => {
  console.log(`server is running, http://${hostname}:${port}`)
})



