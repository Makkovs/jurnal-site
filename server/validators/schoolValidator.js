const APIError = require("../utils/APIError");

class SchoolValidator {

    async validateCreateSchool(req, res, next) {
        try {
            const { schoolName } = req.body;
            if (!schoolName) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateDeleteSchool(req, res, next) {
        try {
            const { schoolId } = req.body;
            if (!schoolId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateGetSchool(req, res, next) {
        try {
            const { schoolId } = req.query;
            if (!schoolId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };
};

module.exports = new SchoolValidator();
