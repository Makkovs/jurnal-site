const { Lesson } = require("../models/models");
const APIError = require("../utils/APIError");

class LessonService {

    async createLesson(lessonName, schoolId) {
        const candidate = await Lesson.findOne({ where: { name: lessonName, schoolId } });
        if (candidate) {
            APIError.errorAlreadyExist();
        };

        const newLesson = await Lesson.create({ name: lessonName, schoolId });
        return newLesson;
    };

    async deleteLesson(lessonId) {
        const candidate = await Lesson.findOne({ where: { id: lessonId } });
        if (!candidate) {
            APIError.errorCandidateNotFound();
        };

        await Lesson.destroy({ where: { id: lessonId } });
        return { message: `Lesson with id ${lessonId} was deleted!` }
    };

    async getOneLesson(lessonId) {
        const candidate = await Lesson.findOne({ where: { id: lessonId } });
        if (!candidate) {
            APIError.errorCandidateNotFound();
        };

        return candidate;
    };

    async getAllLesson(schoolId) {
        let lessons;
        if (!schoolId){
            lessons = await Lesson.findAndCountAll();
        }else {
            lessons = await Lesson.findAndCountAll({
                where: { schoolId }
            });
        };
        
        if (!lessons){
            APIError.errorCandidateNotFound(null)
        };
        return lessons;
    };
};

module.exports = new LessonService();