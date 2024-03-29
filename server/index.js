const express = require('express');
const app = express();
const mongoose = require('mongoose')
const session = require('express-session');
const dbConnect = require('./config/dbConnect')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.use('/api/user', authRouter)

app.use(
    session({
      secret: 'fonelane123', // Replace with a strong and unique secret
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );


app.use(notFound);
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})