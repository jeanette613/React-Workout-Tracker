const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    //check for token being sent in a header or query parameter
    let token = req.get('Authorization') || req.query.token;
    if (token) {
        token = token.replace('Bearer', '');
        //Check if token is valid
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            req.res = err ? null : decoded.user;
        });
        return next();
    } else {
        req.user = null;
        return next();
    }
}