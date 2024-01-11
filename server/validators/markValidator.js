const APIError = require("../utils/APIError");

class MarkValidator {

    async validateCreateMark(req, res, next) {
        try {
            const { mark, lessonId, userId, teacherId, date } = req.body;
            if (!mark || !lessonId || !userId || !teacherId || !date) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            }
        } catch (error) {
            next(error);
        };
    };

    async validateDeleteMark(req, res, next) {
        try {
            const { markId } = req.body;
            if (!markId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            }
        } catch (error) {
            next(error);
        };
    };

    async validateEditMark(req, res, next) {
        try {
            const { markId, mark } = req.body;
            if (!markId || !mark) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            }
        } catch (error) {
            next(error);
        };
    };

    async validateGetAllMarks(req, res, next) {
        try {
            const { lessonId, userId, teacherId } = req.query;

            if (!lessonId && !teacherId && !userId) {
                next(APIError.errorUndefinedArg());
            } else {
                next();
            }
        } catch (error) {
            next(error);
        };
    };
};

module.exports = new MarkValidator();