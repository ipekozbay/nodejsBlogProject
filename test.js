const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1:27017/test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

Post.findByIdAndDelete('645f7a41cae1c4dabd5b4bd0')
  .then(post => {

    console.log(post);
  })
  .catch(err => {
    console.log(err);
  })
Post.findByIdAndUpdate('645f7a41cae1c4dabd5b4bd0', { title: "benim ikinci update postum" })
  .then(post => {

    console.log(post);
  })
  .catch(err => {
    console.log(err);
  });


Post.find({})
  .then(post => {
    console.log(post);
  })
  .catch(err => {
    console.log(err);
  });


Post.create({
  title: ' second post title',
  content: 'second post content'
})
  .then(post => {
    console.log(post);
  })
  .catch(err => {
    console.log(err);
  });