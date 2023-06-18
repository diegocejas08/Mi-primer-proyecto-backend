const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

const homeRouter = require('./routes/home');
const userRouter = require('./routes/user');

const {connect} = require('./dbConnect/db')

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/', homeRouter);
app.use('/home', userRouter);
connect();


module.exports = app