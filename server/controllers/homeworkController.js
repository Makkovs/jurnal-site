const homeworkService = require("../services/homeworkService");
const APIError = require("../utils/APIError");

class HomeworkController {

    async createHomework(req, res, next) {
        try {
            const { lessonId, classId, teacherId, body, date } = req.body;

            const user = req.user;
            if (user.role !== "DIRECTOR" && user.role !== "TEACHER") {
                throw APIError.errorHaveNotPermissions();
            };

            const homework = await homeworkService.createHomework(lessonId, classId, teacherId, body, date);
            return res.json(homework);
        } catch (error) {
            next(error);
        };
    };

    async deleteHomework(req, res, next) {
        try {
            const { homeworkId } = req.body

            const user = req.user;
            if (user.role !== "DIRECTOR" && user.role !== "TEACHER") {
                throw APIError.errorHaveNotPermissions();
            };

            const message = await homeworkService.deleteHomework(homeworkId);
            return res.json(message);
        } catch (error) {
            next(error);
        };
    };

    async editHomework(req, res, next) {
        try {
            const { homeworkId, body, teacherId } = req.body;

            const user = req.user;
            if (user.role !== "DIRECTOR" && user.role !== "TEACHER") {
                throw APIError.errorHaveNotPermissions();
            };

            const message = await homeworkService.editHomework(homeworkId, body, teacherId);
            return res.json(message);
        } catch (error) {
            next(error);
        };
    };

    async getHomework(req, res, next) {
        try {
            const { lessonId, classId, teacherId } = req.query;

            const homework = await homeworkService.getHomework(lessonId, classId, teacherId);
            return res.json(homework);
        } catch (error) {
            next(error);
        };
    };
};

module.exports = new HomeworkController();