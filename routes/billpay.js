const express = require('express');
const router = express.Router();
const user = require('../model/User');
const Profile = require('../model/Billpay');
const verify = require('../verifyToken');
// const { profileValidation } = require('../validation');
const User = require('../model/User');
const { check, validationResult } = require('express-validator');

//@route    GET api/profile/me
//@desc     Get current users profile
//@access   Private
router.get('/history/me', verify, async (req, res) => {
  try {
    const billpay = await Billpay.find({
      user: req.user._id,
    }).populate('user', ['userName', 'avatar']);

    if (!billpay) {
      return res.status(400).json({ msg: 'There is no history for this user' });
    }
    res.json(billpay);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//@route    POST api/profile
//@desc     Creat or update user profile
//@access   Private

router.post(
  '/paybill',
  [
    verify,
    [
      check('billAmount', 'billAmount  is required').not().isEmpty(),
      check('description', 'description  is required').not().isEmpty(),
    ],
  ],

  async (req, res) => {
    // const { error } = profileValidation(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    const errors = validationResult(req);
    if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

    const { billAmount, description } = req.body;
    const billpayFields = {};
    billpayFields.user = req.user._id;
    if (billAmount) billpayFields.billAmount = billAmount;
    if (description) billpayFields.description = description;

    try {
    

      //creat history
      billpay = new Billpay(billpayFields);

      await billpay.save();
      res.json(billpay);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error in profile');
    }
  }
);

//@route    GET api/history/:user_id
//@desc     Get history by user ID
//@access   Privite

router.get('/history/:user_id', async (req, res) => {
  try {
    const billpay = await Billpay.find({
      user: req.params.user_id,
    }).populate();

    if (!billpay)
      return res
        .status(400)
        .json({ msg: 'There are no history for this user' });

    res.status(200).json(billpay);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      res.status(400).json({ msg: 'history not found' });
    }
    res.status(500).send('history get error');
  }
});


module.exports = router;
