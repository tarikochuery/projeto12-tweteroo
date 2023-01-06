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
  users.push(user);
  res.status(201).send('OK');
});

server.post('/tweets', (req, res) => {
  const data = req.body;
  const user = users.find(user => user.username === data.username);
  if (!user) {
    res.send('UNAUTHORIZED');
    return;
  }

  const tweetInfo = { ...data, avatar: user.avatar };
  tweets.push(tweetInfo);

  res.status(201).send('OK');
});

server.get('/tweets', (req, res) => {
  const AMOUNT_OF_TWEETS = 10;
  res.send(tweets.filter((tweet, index) => tweets.length - index <= AMOUNT_OF_TWEETS));
});

server.get('/tweets/:username', (req, res) => {
  const { username } = req.params;

  const userTweets = tweets.filter((tweet => tweet.username === username));

  res.send(userTweets);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});