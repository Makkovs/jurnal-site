const { Class } = require("../models/models");
const APIError = require("../utils/APIError");
const APIMessage = require("../utils/APIMessage");

class ClassService {

    async createClass(year, letter, teacherId, schoolId) {
        const candidate = await Class.findOne({
            where: { year, letter, schoolId }
        });

        if (candidate) {
            throw APIError.errorAlreadyExist("class");
        };

        const newClass = await Class.create({ year, letter, schoolId, classTeacherId: teacherId, });
        return newClass;
    };

    async deleteClass(classId) {
        const candidate = await Class.findOne({
            where: { id: classId }
        });

        if (!candidate) {
            throw APIError.errorCandidateNotFound(classId);
        };

        await Class.destroy({ where: { id: classId } });
        return APIMessage.messageDeleted("Class", classId);
    };

    async setYear(classId, year) {
        const candidate = await Class.findOne({
            where: { id: classId }
        });
        if (!candidate) {
            throw APIError.errorCandidateNotFound(classId);
        };

        const candidateLetter = await Class.findOne({
            where: { year, letter: candidate.letter, schoolId: candidate.schoolId }
        });
        if (candidateLetter) {
            throw APIError.errorAlreadyExist("class")
        };

        await Class.update(
            { year: year },
            { where: { id: classId } }
        );
        return APIMessage.messageUpdated("Class", classId);
    };

    async setLetter(classId, letter) {
        const candidate = await Class.findOne({
            where: { id: classId }
        });
        if (!candidate) {
            throw APIError.errorCandidateNotFound(classId);
        };

        const candidateYear = await Class.findOne({
            where: { letter, year: candidate.year, schoolId: candidate.schoolId }
        });
        if (candidateYear) {
            throw APIError.errorAlreadyExist("class");
        };

        await Class.update(
            { letter: letter },
            { where: { id: classId } }
        );
        return APIMessage.messageUpdated("Class", classId);
    };

    async setTeacher(classId, teacherId) {
        const candidate = await Class.findOne({
            where: { id: classId }
        });
        if (!candidate) {
            throw APIError.errorCandidateNotFound(classId);
        };

        await Class.update(
            { classTeacherId: teacherId },
            { where: { id: classId } }
        );
        return APIMessage.messageUpdated("Class", classId);
    };

    async getOneClass(classId) {
        const candidate = await Class.findOne({
            where: { id: classId }
        });
        if (!candidate) {
            throw APIError.errorCandidateNotFound(classId)
        };

        return candidate;
    };

    async getAllClasses(schoolId) {
        const classes = await Class.findAndCountAll({
            where: { schoolId }
        });

        return classes;
    };
};

module.exports = new ClassService();