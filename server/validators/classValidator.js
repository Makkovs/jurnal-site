const APIError = require("../utils/APIError");

class ClassValidator {

    async validateCreateClass(req, res, next) {
        try {
            const { year, letter, teacherId, schoolId } = req.body;
            if (!year || !letter || !teacherId || !schoolId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async validateDeleteClass(req, res, next) {
        try {
            const { classId } = req.body;
            if (!classId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async validateSetYear(req, res, next) {
        try {
            const { classId, year } = req.body;
            if (!classId || !year) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async validateSetLetter(req, res, next) {
        try {
            const { classId, letter } = req.body;
            if (!classId || !letter) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateSetTeacher(req, res, next) {
        try {
            const { classId, teacherId } = req.body;
            if (!classId || !teacherId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateGetOneClass(req, res, next) {
        try {
            const { classId } = req.query;
            if (!classId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateGetAllClasses(req, res, next) {
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

module.exports = new ClassValidator();
