import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello Express and EJS!'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// server.get('/about.html', (req,res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});