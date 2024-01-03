const jwt = require("jsonwebtoken");

const generateJwt = (id, name, surname, fathername, role, schoolId, classId) => {
    return jwt.sign(
        { id, name, surname, fathername, role, schoolId, classId },
        process.env.SECRET_KEY,
        { expiresIn: '48h' }
    );
};

module.exports = generateJwt;