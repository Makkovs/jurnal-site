const APIError = require("../utils/APIError");

class userValidator {

    async validateCreateUser(req, res, next) {
        const { login, name, surname, fathername, password, role, schoolId } = req.body;

        if (
            !login || !name || !surname || !fathername ||
            !password || !role || !schoolId
        ) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateLoginUser(req, res, next) {
        const { login, password } = req.body;
        if (!login || !password) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateRangeClassUser(req, res, next) {
        const { userId, toClassId } = req.body;
        if (!userId || !toClassId) {
            next(APIError.errorUndefinedArg());
        };

        const userDirector = req.user;
        if (userDirector.role !== "DIRECTOR" && userDirector.role !== "ADMIN") {
            next(APIError.errorHaveNotPermissions());
        };
        next();
    };

    async validateGetOneUser(req, res, next) {
        const { userId } = req.query;
        if (!userId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateGetAllUsers(req, res, next) {
        const { schoolId } = req.query;
        if (!schoolId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };
};

module.exports = new userValidator();