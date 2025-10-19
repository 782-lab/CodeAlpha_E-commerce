const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  // DEBUG LOG
  console.log('--- SECRET USED FOR SIGNING (in generateToken.js):', process.env.JWT_SECRET); 

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;