const router = require('express').Router();
const getUser = require('../model/User');
const verify = require('../verifyToken');



router.get('/post',verify , async (req, res) => {
  try{
      const user = await getUser.findById(req.user._id).select();
      res.status(200).json(user);
  }catch(err){
      res.status(500).send(err.message);
  }
});


module.exports = router;
