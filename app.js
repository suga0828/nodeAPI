import express from 'express';

// bring in routes
import { getPosts } from './routes/post.js';

// middleware
import morgan from 'morgan';
const customMiddleware = (req, res, next) => {
  console.log('middleware applied');
  next();
};

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(customMiddleware);

app.get('/', getPosts);

app.listen(port, () => console.log(`Node.js API listening in port ${port}`));
