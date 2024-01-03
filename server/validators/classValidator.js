const APIError = require("../utils/APIError");

class ClassValidator {

    async validateCreateClass(req, res, next) {
        const { year, letter, teacherId, schoolId } = req.body;
        if (!year || !letter || !teacherId || !schoolId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateDeleteClass(req, res, next) {
        const { classId } = req.body;
        if (!classId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateSetYear(req, res, next) {
        const { classId, year } = req.body;
        if (!classId || !year) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateSetLetter(req, res, next) {
        const { classId, letter } = req.body;
        if (!classId || !letter) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateSetTeacher(req, res, next) {
        const { classId, teacherId } = req.body;
        if (!classId || !teacherId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateGetOneClass(req, res, next) {
        const { classId } = req.query;
        if (!classId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateGetAllClasses(req, res, next) {
        const { schoolId } = req.query;
        if (!schoolId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };
};

module.exports = new ClassValidator();