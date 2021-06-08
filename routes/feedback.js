const {feedbackValidation} = require('../feedValidaton');
const Feedback = require('../model/Feedback');
const router = require('express').Router();
//const User = require('../model/User');

   


router.post('/feedback', async (req, res ) =>{

    const {error} = feedbackValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

  const feed = new Feedback({
    name: req.body.name,
    email: req.body.email,
    feedback: req.body.feedback,
    selectedOption: req.body.selectedOption
  });
  try {
    const saveFeedback = await feed.save();
    res.send(saveFeedback);
    //only give the id as responce 
    //res.send('Thank you');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
