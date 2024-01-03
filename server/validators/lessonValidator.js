const { deleteLesson } = require("../services/lessonService");
const APIError = require("../utils/APIError");

class LessonValidator {

    async validateCreateLesson(req, res, next) {
        const { lessonName, schoolId } = req.body;
        if (!lessonName || !schoolId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateDeleteLesson(req, res, next) {
        const { lessonId } = req.body;
        if (!lessonId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateGetOneLesson(req, res, next) {
        const { lessonId } = req.query;
        if (!lessonId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };

    async validateGetAllLesson(req, res, next) {
        const { schoolId } = req.query;
        if (!schoolId) {
            next(APIError.errorUndefinedArg());
        };
        next();
    };
};

module.exports = new LessonValidator();