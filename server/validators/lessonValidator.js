const APIError = require("../utils/APIError");

class LessonValidator {

    async validateCreateLesson(req, res, next) {
        try {
            const { lessonName, schoolId } = req.body;
            if (!lessonName || !schoolId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateDeleteLesson(req, res, next) {
        try {
            const { lessonId } = req.body;
            if (!lessonId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateGetOneLesson(req, res, next) {
        try {
            const { lessonId } = req.query;
            if (!lessonId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateGetAllLesson(req, res, next) {
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

module.exports = new LessonValidator();
