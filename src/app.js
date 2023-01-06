import express, { json } from 'express';
import cors from 'cors';

const users = [];
const tweets = [];
const PORT = 5000;
const urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

const server = express();

server.use(cors());
server.use(json());

server.post('/sign-up', (req, res) => {
  const user = req.body;
  const isUserInvalid = !user.username || !user.avatar;
  if (isUserInvalid) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  const isUsernameString = typeof user.username === `string`;
  const isAvatrString = typeof user.avatar === `string`;

  if (!isAvatrString || !isUsernameString) {
    res.status(403).send('Insira nome de usuário e avatar válidos');
    return;
  }

  //const isAvatarValidURL = urlRegex.test(user.avatar);

  //if (!isAvatarValidURL) {
  //  res.status(403).send('Insira uma URL válida');
  //  return;
  //}

  users.push(user);
  res.status(201).send('OK');
});

server.post('/tweets', (req, res) => {
  const { user: username } = req.headers;

  const data = req.body;
  const user = users.find(user => user.username === username);

  const isTweetReceived = data.tweet;
  if (!isTweetReceived) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  const isTweetValid = typeof data.tweet === 'string';
  if (!isTweetValid) {
    res.status(403).send('Insira um tweet válido');
    return;
  }

  if (!user) {
    res.status(401).send('UNAUTHORIZED');
    return;
  }

  const tweetInfo = { ...data, avatar: user.avatar, username };
  tweets.push(tweetInfo);

  res.status(201).send('OK');
});

server.get('/tweets', (req, res) => {
  const page = req.query.page ? Number(req.query.page) : undefined;
  console.log(page);
  const AMOUNT_OF_TWEETS = 10;

  if (page !== undefined) {
    console.log('entrei no if de paginação');
    if (page < 1) {
      console.log('Entrei no if de page invalida');
      res.status(400).send('Informe uma página válida!');
      return;
    }

    res.send(tweets.filter((tweet, index) => tweets.length - index <= AMOUNT_OF_TWEETS * page && tweets.length - index > AMOUNT_OF_TWEETS * (page - 1)).reverse());
    return;
  }

  res.send(tweets.filter((tweet, index) => tweets.length - index <= AMOUNT_OF_TWEETS).reverse());
});

server.get('/tweets/:username', (req, res) => {
  const { username } = req.params;

  const userTweets = tweets.filter((tweet => tweet.username === username));

  res.send(userTweets);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});