const jwt = require('jsonwebtoken');
const config = require('config');



module.exports = function(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json({msg:'No token, authentication denied'});
 
  try {
    const verified = jwt.verify(token, config.get('TOKEN_SECRET'));
    req.user = verified.user;
    next();
  } catch (err) {
    res.status(400).json({msg: 'Token is not valid'});
    
  }
}
  