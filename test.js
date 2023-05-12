const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1:27017/test_db',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

Post.create({
  title: ' post title',
  content: 'post content'
})
  .then(post => {
    console.log(post);
  })
  .catch(err => {
    console.log(err);
  });