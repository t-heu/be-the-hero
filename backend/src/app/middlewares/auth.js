const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const authConfig = require('../../config/auth')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers)
  if (!authHeader) return res.status(403).json({ error: 'Token not provided' });
  
  const [, token] = authHeader.split(' ');
  
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    
    if (decoded.exp < Date.now() / 1000) {
      return res.status(404).json({ error: 'Token Expired'})
    }
    
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token Invalid' });
  }
};
