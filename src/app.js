import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

server.get('/', (req, res) => {
  res.send('Server running fine on endpath /');
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});