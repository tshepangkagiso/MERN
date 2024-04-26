'use strict';
//dependencies
require('dotenv').config();
const express = require('express'), app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//dotenv variables
const port = process.env.PORT || 5001;
const uri = process.env.URI || 'mongodb://127.0.0.1:27017/exercise-tracker';

//db model variables
const Exercise = require('./models/exercise.model');
const User = require('./models/user.model');

//route variables
const exerciseRouter = require('./routes/exercise.route');
const userRouter = require('./routes/user.route');


//database
mongoose.connect(uri, {
  /*useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true*/
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
 


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


//main route


//server
app.listen(port, () =>{
    console.log(`server online on port ${port}`)
});