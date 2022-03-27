const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log(req.body.token);
    //const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(req.body.token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    // éviter une faille de sécurité
    req.auth = {userId};
    // OU
    // req.auth = {userId};

    // propager une exception si l'id de l'utilsateur ne correspond à celui qui est nécessaire pour faire cela
    // if (req.body.id && req.body.userId != userId) {
    //   throw 'Invalid user ID';
    // } else {
      next();
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};