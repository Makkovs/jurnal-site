const errorHandler = require("../middlewares/errorHandler");
const APIError = require("../utils/APIError");
const lessonService = require("../services/lessonService");

class LessonController {

    async createLesson(req, res, next) {
        try {
            const { lessonName, schoolId } = req.body;

            const newLesson = await lessonService.createLesson(lessonName, schoolId)
            return res.json({ newLesson })
        } catch (error) {
            next(error);
        };
    };

    async deleteLesson(req, res, next) {
        try {
            const { lessonId } = req.body;

            const message = await lessonService.deleteLesson(lessonId);
            return res.json(message);
        } catch (error) {
            next(error);
        };
    };

    async getOneLesson(req, res, next) {
        try {
            const { lessonId } = req.query;

            const lesson = await lessonService.getOneLesson(lessonId);
            return res.json(lesson);
        } catch (error) {
            next(error);
        };
    };

    async getAllLesson(req, res, next) {
        try {
            const { schoolId } = req.query;

            const lessons = await lessonService.getAllLesson(schoolId);
            return res.json(lessons);
        } catch (error) {
            next(error);
        };
    };
};

module.exports = new LessonController();