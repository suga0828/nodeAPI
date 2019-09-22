import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// bring in routes
import router from './routes/post.js';

// middleware
import morgan from 'morgan';

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

// DB
mongoose
  .connect(process.env.MONGO_URI, {
    // prevent warnings
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('DB connected');
  });

mongoose.connection.on('error', err => {
  console.log(`DB conecction error: ${err.message}`);
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => console.log(`Node.js API listening in port ${port}`));
