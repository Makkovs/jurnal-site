const errorHandler = require("../utils/errorHandler");
const APIError = require("../utils/APIError");
const lessonService = require("../services/lessonService");

class LessonController {

    async createLesson (req, res){
        errorHandler(async () => {
            const { lessonName, schoolId } = req.body;
            if (!lessonName || !schoolId){
                APIError.errorUndefinedArg();
            };

            const newLesson = await lessonService.createLesson(lessonName, schoolId)
            return res.json({newLesson})
        })(req, res);
    };

    async deleteLesson (req, res){
        errorHandler(async () => {
            const { lessonId } = req.body;
            if (!lessonId){
                APIError.errorUndefinedArg();
            };

            const message = await lessonService.deleteLesson(lessonId);
            return res.json(message);
        })(req, res);
    };

    async getOneLesson(req, res){
        errorHandler(async () => { 
            const { lessonId } = req.query;
            if (!lessonId){
                APIError.errorUndefinedArg();
            };

            const lesson = await lessonService.getOneLesson(lessonId);
            return res.json(lesson);
        })(req, res);
    };

    async getAllLesson(req, res){
        errorHandler(async () => {
            const { schoolId } = req.query;
            if (!schoolId){
                APIError.errorUndefinedArg();
            };

            const lessons = await lessonService.getAllLesson(schoolId);
            return res.json(lessons);
        })(req, res);
    };
};

module.exports = new LessonController();