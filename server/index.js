const parser = require('body-parser');
const express = require('express');
const axios = require('axios');
const YOUTUBE_API_KEY = require('./youtube.js');

const app = express();
const port = 1337;

app.use(express.static(__dirname+'/../client/dist'));

app.listen(port, () => console.log(`listening on port ${port}!`));
app.use(parser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/search', searchYouTube);

app.get('/', (req, res) => res.send('Hello World!'));


function searchYouTube(req,res){

  let searchString = 'https://www.googleapis.com/youtube/v3/search?q=XCOMshiv&part=snippet&key='+YOUTUBE_API_KEY+'&maxResults=10&type=video&videoEmbeddable=true'
  axios.get(searchString)
  .then((result)=>{
    // console.log(result.data.items);
    res.status(200).send(result.data.items);
  })
  .catch((err)=>{
    console.log(err);
    res.send(200);
  });
}
