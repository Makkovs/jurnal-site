const APIError = require("../utils/APIError");

class SchoolValidator {

    async validateCreateSchool(req, res, next) {
        const { schoolName } = req.body;
        if (!schoolName) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateDeleteSchool(req, res, next) {
        const { schoolId } = req.body;
        if (!schoolId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateGetSchool(req, res, next) {
        const { schoolId } = req.query;
        if (!schoolId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };
};

module.exports = new SchoolValidator();