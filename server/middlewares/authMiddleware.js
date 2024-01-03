const jwt = require("jsonwebtoken");
const APIError = require("../utils/APIError");

module.exports = function (req, res, next) {
    if (req.method == "OPTIONS") {
        next();
    };
    
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        if (!authHeader || !token) {
            APIError.errorUnLogged();
        };
        
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ error: `${error}` });
    };
};