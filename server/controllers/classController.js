const classService = require("../services/classService");

class ClassController {

    async createClass(req, res, next) {
        try {
            const { year, letter, teacherId, schoolId } = req.body;

            const newClass = await classService.createClass(year, letter, teacherId, schoolId);
            return res.json({ newClass });
        } catch (error) {
            next(error);
        };
    };

    async deleteClass(req, res, next) {
        try {
            const { classId } = req.body;

            const message = await classService.deleteClass(classId);
            return res.json(message);
        } catch (error) {
            next(error);
        };
    };

    async setYear(req, res, next) {
        try {
            const { classId, year } = req.body;

            const message = await classService.setYear(classId, year);
            return res.json(message);
        } catch (error) {
            next(error);
        };
    };

    async setLetter(req, res, next) {
        try {
            const { classId, letter } = req.body;

            const message = await classService.setLetter(classId, letter);
            return res.json(message);
        } catch (error) {
            next(error);
        };
    };

    async setTeacher(req, res, next) {
        try {
            const { classId, teacherId } = req.body;

            const message = await classService.setTeacher(classId, teacherId);
            return res.json(message);
        } catch (error) {
            next(error);
        };
    };

    async getOneClass(req, res, next) {
        try {
            const { classId } = req.query;

            const classGet = await classService.getOneClass(classId);
            return res.json(classGet);
        } catch (error) {
            next(error);
        };
    };

    async getAllClasses(req, res, next) {
        try {
            const { schoolId } = req.query;

            const allClasses = await classService.getAllClasses(schoolId);
            return res.json(allClasses);
        } catch (error) {
            next(error);
        };
    };
};

module.exports = new ClassController();