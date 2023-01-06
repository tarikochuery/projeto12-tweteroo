import express, { json } from 'express';
import cors from 'cors';

const users = [];
const tweets = [{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "post 10"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "post 20"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "post 30"
},];
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

  if (!urlRegex.test(user.avatar)) {
    res.status(403).send('Insira uma URL válida');
    return;
  }

  users.push(user);
  res.status(201).send('OK');
});

server.post('/tweets', (req, res) => {
  const data = req.body;
  const user = users.find(user => user.username === data.username);

  const isTweetInvalid = !data.tweet || !data.username;
  if (isTweetInvalid) {
    res.status(400).send('Todos os campos são obrigatórios!');
  }

  if (!user) {
    res.status(401).send('UNAUTHORIZED');
    return;
  }

  const tweetInfo = { ...data, avatar: user.avatar };
  tweets.push(tweetInfo);

  res.status(201).send('OK');
});

server.get('/tweets', (req, res) => {
  const { page } = req.query;
  const AMOUNT_OF_TWEETS = 10;

  if (page) {
    if (page < 1) {
      res.status(400).send('Informe uma página válida!');
      return;
    }

    res.send(tweets.filter((tweet, index) => tweets.length - index <= AMOUNT_OF_TWEETS * page && tweets.length - index > AMOUNT_OF_TWEETS * (page - 1)));
  }

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