const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

import indexRouter from '*/routers/index';

mongoose
  .connect('mongodb://localhost:27017/shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connect DB successfully'))
  .catch(console.log);

const app = express();

//cors
// app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, token'
  );
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH');
  next();
});

app.use(express.json());
app.use(cookieParser());
// Router
indexRouter(app);

const port = 5000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
