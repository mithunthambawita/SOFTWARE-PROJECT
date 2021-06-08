const express = require('express');
const router = express.Router();
const User = require('../model/Payment');
const verify = require('../verifyToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator');
// const {registerValidation , loginValidation} = require('../validation');

router.post(
  '/successBuy',
  verify,
  async (req, res) => {


    let transactionData = [];


    const { total, discription } = req.body;
    const transactionField = {};

    transactionField.total = distric;
    transactionField.discription = city;
    transactionData.data = req.body.paymentData;

    transactionData.user = {
        id: req.user._id,
        name: req.user.firstName,
        email: req.user.email
    };



    try {
     

      //creat
      payment = new Payment(transactionField);

      await payment.save();
      res.json(payment);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error in payment');
    }
  }
);

module.exports = router;
