const { Mark } = require("../models/models");
const APIError = require("../utils/APIError");

class MarkService {

    async createMark(mark, lessonId, userId, teacherId, date) {
        const candidate = await Mark.findOne({ where: { lessonId, userId, date } });
        if (candidate) {
            throw APIError.errorAlreadyExist("mark");
        };

        const createdMark = await Mark.create({
            number: mark,
            date: date,
            userId,
            lessonId,
            teacherId
        });
        return createdMark;
    };

    async deleteMark(markId) {
        const candidate = await Mark.findOne({ where: { id: markId } });
        if (!candidate) {
            throw APIError.errorCandidateNotFound("Mark", "id", markId);
        };

        await Mark.destroy({ where: { id: markId } });
        return { message: `Mark with id ${markId} was deleted!` };
    };

    async editMark(markId, mark, user) {
        const candidate = await Mark.findOne({ where: { id: markId } });
        if (!candidate) {
            throw APIError.errorCandidateNotFound("Mark", "id", markId);
        };

        await Mark.update(
            { number: mark, userId: user.id },
            { where: { id: markId } }
        );
        return { message: `Mark with id ${markId} was updated!` };
    };

    async getAllMarks(lessonId, userId, teacherId) {
        let marks;
        if (lessonId && userId) {
            marks = Mark.findAll({ where: { lessonId, userId } });
        } else if (lessonId) {
            marks = Mark.findAll({ where: { lessonId } });
        } else if (teacherId) {
            marks = Mark.findAll({ where: { teacherId } });
        } else if (userId) {
            marks = Mark.findAll({ where: { userId } });
        };
        return marks;
    };
};

module.exports = new MarkService();