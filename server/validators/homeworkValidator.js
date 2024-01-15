const APIError = require("../utils/APIError");

class HomeworkValidator {

    async validateCreateHomework(req, res, next) {
        try {
            const { lessonId, classId, teacherId, body, date } = req.body;
            if (!lessonId || !classId || !teacherId || !body || !date) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateDeleteHomework(req, res, next) {
        try {
            const { homeworkId } = req.body;
            if (!homeworkId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateEditHomework(req, res, next) {
        try {
            const { homeworkId, body, teacherId } = req.body;
            if (!homeworkId || !body || !teacherId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };

    async validateGetHomework(req, res, next) {
        try {
            const { lessonId, classId, teacherId } = req.query;
            if (!lessonId && !classId && !teacherId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            };
        } catch (error) {
            next(error);
        };
    };
};

module.exports = new HomeworkValidator();