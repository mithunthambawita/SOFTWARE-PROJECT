const express = require('express');
const router = express.Router();
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
var cors = require('cors');
app.use(cors());

//Import Router
const authRouter = require('./routes/auth');
const feedBack = require('./routes/feedback');
const testpost = require('./routes/testpost');
const profile = require('./routes/profile');
const payment = require('./routes/payment');
const billpay = require('./routes/billpay');

dotenv.config();

//connect to the database
connectDB();

//middle were
app.use(express.json({ extended: false })); //wens kara mama

//Router middleware
app.use('/api/user', authRouter);
app.use('/api', feedBack);
app.use('/api', testpost);
app.use('/api', profile);
app.use('/api/user', payment);
app.use('/api/user', billpay);

//Server static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
