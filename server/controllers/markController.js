const markService = require("../services/markService");
const APIError = require("../utils/APIError");

class MarkController {

    async createMark(req, res, next) {
        try {
            const { mark, lessonId, userId, teacherId, date } = req.body;
            
            const user = req.user;
            if (user.role !== "DIRECTOR" && user.role !== "TEACHER"){
                throw APIError.errorHaveNotPermissions();
            };

            const createdMark = await markService.createMark(mark, lessonId, userId, teacherId, date);
            return res.json(createdMark);
        } catch (error) {
            next(error);
        };
    };

    async deleteMark(req, res, next) {
        try {
            const { markId } = req.body;

            const user = req.user;
            if (user.role !== "DIRECTOR" && user.role !== "TEACHER") {
                throw APIError.errorHaveNotPermissions();
            };

            const message = await markService.deleteMark(markId);
            return res.json(message);
        } catch (error) {
            next(error);
        };
    };

    async editMark(req, res, next) {
        try {
            const { markId, mark } = req.body;

            const user = req.user;
            if (user.role !== "DIRECTOR" && user.role !== "TEACHER") {
                throw APIError.errorHaveNotPermissions();
            };

            const message = await markService.editMark(markId, mark, user);
            return res.json(message);
        } catch (error) {
            next(error);
        };
    };

    async getAllMarks(req, res, next) {
        try {
            const { lessonId, userId, teacherId } = req.query;

            const marks = await markService.getAllMarks(lessonId, userId, teacherId);
            return res.json(marks);
        } catch (error) {
            next(error);
        };
    };
};

module.exports = new MarkController();