const express = require('express');
const router = express.Router();
const user = require('../model/User');
const Profile = require('../model/Profile');
const verify = require('../verifyToken');
// const { profileValidation } = require('../validation');
const User = require('../model/User');
const  multer = require('multer')
const { check, validationResult } = require('express-validator');





//@route    GET api/profile/me
//@desc     Get current users profile
//@access   Private
router.get('/profile/me', verify, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user._id,
    }).populate('user', [ 'firstName',
    'lastName',
    'userName',
    'role',
    'avatar',]);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//@route    POST api/profile
//@desc     Creat or update user profile
//@access   Private

router.post(
  '/profile', 
  [
    verify,
    [
      check('distric', 'Distric  is required').not().isEmpty(),
      check('city', 'City  is required').not().isEmpty(),
      check('mobileNo', 'mobileNo  is required').not().isEmpty(),
      check('nationalId', 'nationalId  is required').not().isEmpty(),
    ],
  ],

  async (req, res) => {
    // const { error } = profileValidation(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const {
      distric,
      city,
      mobileNo,
      nationalId,
    } = req.body;

    const profileFields = {};
    profileFields.user = req.user._id;
    if (distric) profileFields.distric = distric;
    if (city) profileFields.city = city;
    if (mobileNo) profileFields.mobileNo = mobileNo;
    if (nationalId) profileFields.nationalId = nationalId;

    try {
      let profile = await Profile.findOne({ user: req.user._id });

      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user._id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //creat
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error in profile');
    }
  }
);
//@route    GET api/profile
//@desc     Get all profile
//@access   Public

router.get('/profile', async (req, res) => {
  try {
    
    const profiles = await Profile.find().populate('user', [
      'firstName',
      'lastName',
      'userName',
      'role',
      'avatar',
    ]);
    res.status(200).json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('profile get error');
  }
});

//@route    GET api/profile/:user_id
//@desc     Get profile by user ID
//@access   Privite

router.get('/profile/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['userName', 'avatar','role']);

    if (!profile)
      return res
        .status(400)
        .json({ msg: 'There are no profile for this user' });

    res.status(200).json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('profile get error');
  }
});

//@route    DELETE api/profile
//@desc     DELETE profile,user & post
//@access   private
router.delete('/profile', verify, async (req, res) => {
  try {
    //remove profile
    await Profile.findOneAndRemove({ user: req.user._id });
    //remove user
    await User.findOneAndRemove({ _id: req.user._id });

    res.status(200).json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('profile get error');
  }
});

module.exports = router;
