const APIError = require("../utils/APIError");

class UserValidator {

    async validateCreateUser(req, res, next) {
        try {
            const { login, name, surname, fathername, password, role, schoolId } = req.body;

            if (
                !login || !name || !surname || !fathername ||
                !password || !role || !schoolId
            ) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateLoginUser(req, res, next) {
        try {
            const { login, password } = req.body;
            if (!login || !password) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            }
        } catch (error) {
            next(error);
        };
    };

    async validateRangeClassUser(req, res, next) {
        try {
            const { userId, toClassId } = req.body;
            if (!userId || !toClassId) {
                next(APIError.errorUndefinedArg());
            } else {
                const userDirector = req.user;
                if (userDirector.role !== "DIRECTOR" && userDirector.role !== "ADMIN") {
                    next(APIError.errorHaveNotPermissions());
                } else {
                    next();
                };
            };
        } catch (error) {
            next(error);
        };
    };

    async validateGetOneUser(req, res, next) {
        try {
            const { userId } = req.query;
            if (!userId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateGetAllUsers(req, res, next) {
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

module.exports = new UserValidator();