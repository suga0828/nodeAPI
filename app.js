import express from 'express';

// bring in routes
import router from './routes/post.js';

// middleware
import morgan from 'morgan';

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use('/', router);

app.listen(port, () => console.log(`Node.js API listening in port ${port}`));
