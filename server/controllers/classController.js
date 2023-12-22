const errorHandler = require("../utils/errorHandler");
const classService = require("../services/classService");
const APIError = require("../utils/APIError");

class ClassController {

    async createClass (req, res){
        errorHandler(async () => {
            const { year, letter, teacherId, schoolId } = req.body; 

            const newClass = await classService.createClass(year, letter, teacherId, schoolId);
            return res.json({ newClass });
        })(req, res);
    };

    async deleteClass (req, res) {
        errorHandler(async () => {
            const { classId } = req.body;
            if (!classId){
                APIError.errorUndefinedArg();
            };

            const message = await classService.deleteClass(classId);
            return res.json(message);
        })(req, res);
    };

    async setYear (req, res){
        errorHandler(async () => {
            const { classId, year } = req.body;
            if (!classId || !year){
                APIError.errorUndefinedArg();
            };

            const message = await classService.setYear(classId, year);
            return res.json(newClass)
        })(req, res);
    };

    async setLetter (req, res) {
        errorHandler(async () => {
            const { classId, letter } = req.body;
            if (!classId || !letter){
                APIError.errorUndefinedArg();
            };
            
            const message = await classService.setLetter(classId, letter);
            return res.json(message);
        })(req, res);
    };

    async setTeacher (req, res){
        errorHandler(async () => {
            const { classId, teacherId } = req.body;
            if (!classId || !teacherId){
                APIError.errorUndefinedArg();
            };

            const message = await classService.setTeacher(classId, teacherId);
            return res.json(message);
        })(req, res);
    };

    async getOneClass (req, res){
        errorHandler(async () => {
            const { classId } = req.query;
            if (!classId) {
                APIError.errorUndefinedArg();
            };

            const classGet = await classService.getOneClass(classId);
            return res.json(classGet);
        })(req, res);
    };

    async getAllClasses (req, res){
        errorHandler(async () => {
            const { schoolId } = req.query;
            const allClasses = await classService.getAllClasses(schoolId);
            return res.json(allClasses);
        })(req, res);
    };
};

module.exports = new ClassController()