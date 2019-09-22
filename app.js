import express from 'express';

// bring in routes
import { getPosts } from './routes/post.js';

const app = express();
const port = 8080;

app.get('/', getPosts);

app.listen(port, () => console.log(`Node.js API listening in port ${port}`));
