const express = require('express');
const router = express.Router();
const User = require('../model/User');
const verify = require('../verifyToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator');
const config = require('config');

//register user
router.post(
  '/register',
  [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('mobileNumber', 'Mobile Number Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('userName', 'User name  is required').not().isEmpty(),
    check('passWord', 'Please enter a password with 6 or more characters').isLength({min : 6}),
    check('confirmPassWord', 'Please enter a password with 6 or more characters').isLength({min : 6}),
  ],
  async (req, res) => {
    // const { error } = registerValidation(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array()});
      // return res.status(400).json({ errors: error.details[0].message }); //send => json

    //check if the user is already in the db
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
      return res
        .status(400)
        .json({ errors: [{ msg: 'Email already exists' }] });

    //check passwrd and conformpasswrd
    if (req.body.passWord != req.body.confirmPassWord)
      return res.status(400).send('Password incorrect');

    //Get User gravatar
    const avatar = gravatar.url(
      { email: req.body.email },
      {
        s: '200',
        r: 'pg',
        d: 'mm',
      }
    );

    //hash pasword
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.passWord, salt);
    const hashConformPassword = await bcrypt.hash(
      req.body.confirmPassWord,
      salt
    );

    //creat a new user
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobileNumber: req.body.mobileNumber,
      role: req.body.role,
      nationalId: req.body.nationalId,
      email: req.body.email,
      userName: req.body.userName,
      passWord: hashPassword,
      confirmPassWord: hashConformPassword,
      avatar,
    });
    try {
      const savedUser = await user.save();
      // res.send(savedUser);
      //only give the id as responce
      // res.send({user:user._id});
    } catch (err) {
      res.status(400).send(err);
    }

    //creat and assign token
    //creat and assign token
  const payload = {
    user: {
      _id: user._id,
    },
  };

  const token = jwt.sign(
    payload,
    config.get('TOKEN_SECRET'),
    { expiresIn: 3600000 },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
  }
);

//login user
router.post('/login', 
[
  check('email', 'Please include a valid email').isEmail(),
  check('passWord', 'Password is required').exists(),
],
 async (req, res) => {
  // const { error } = loginValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  const errors = validationResult(req);
    if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array()});

  //check if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(400)
      .json({ errors: [{ msg: 'Invalid email or password' }] });

  //check passwrd
  const validPass = await bcrypt.compare(req.body.passWord, user.passWord);
  if (!validPass) return res.status(400).send('Invalida password');

  //creat and assign token
  const payload = {
    user: {
      _id: user._id,
    },
  };

  const token = jwt.sign(
    payload,
    config.get('TOKEN_SECRET'),
    { expiresIn: 3600000 },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
});

//@route    GET api/users
//@desc     Get all users
//@access   Public

router.get('/users', async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Users get error');
  }
});

module.exports = router;
