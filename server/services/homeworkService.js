const { Homework } = require("../models/models");
const APIError = require("../utils/APIError");
const APIMessage = require("../utils/APIMessage");

class HomeworkService {

    async createHomework(lessonId, classId, teacherId, body, date) {
        const candidate = await Homework.findOne({ where: { lessonId, date } });
        if (candidate) {
            throw APIError.errorAlreadyExist("homework");
        };

        const homework = await Homework.create({ lessonId, classId, userId: teacherId, body, date });
        return homework;
    };

    async deleteHomework(homeworkId) {
        const candidate = await Homework.findOne({ where: { id: homeworkId } });
        if (!candidate) {
            throw APIError.errorCandidateNotFound("Homework", "id", homeworkId);
        };

        await Homework.destroy({ where: { id: homeworkId } });
        return APIMessage.messageDeleted("Homework", homeworkId);
    };

    async editHomework(homeworkId, body, teacherId) {
        const candidate = await Homework.findOne({ where: { id: homeworkId } });
        if (!candidate) {
            throw APIError.errorCandidateNotFound("Homework", "id", homeworkId);
        };

        await Homework.update({ body, userId: teacherId }, { where: { id: homeworkId } });
        return APIMessage.messageUpdated("Homework", homeworkId);
    };

    async getHomework(lessonId, classId, teacherId) {
        let homework;
        if (lessonId && classId) {
            homework = await Homework.findAndCountAll({ where: { lessonId, classId } });
        } else if (lessonId && teacherId) {
            homework = await Homework.findAndCountAll({ where: { lessonId, teacherId } });
        } else if (classId && teacherId) {
            homework = await Homework.findAndCountAll({ where: { classId, teacherId } });
        } else if (classId) {
            homework = await Homework.findAndCountAll({ where: { classId } });
        } else if (lessonId) {
            homework = await Homework.findAndCountAll({ where: { lessonId } });
        };
        return homework;
    };
};

module.exports = new HomeworkService();