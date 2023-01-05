import express, { json } from 'express';
import cors from 'cors';

const users = [];
const tweets = [];
const PORT = 5000;

const server = express();

server.use(cors());
server.use(json());

server.post('/sign-up', (req, res) => {
  const user = req.body;
  users.push(req.body);
  res.send('OK');
});

server.post('/tweets', (req, res) => {
  const tweetInfo = req.body;
  const isSignedUp = users.find(user => user.username === tweetInfo.username);
  if (!isSignedUp) {
    res.send('UNAUTHORIZED');
    return;
  }
  tweets.push(tweetInfo);
  res.send('OK');
});

server.get('/tweets', (req, res) => {
  res.send(tweets);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});