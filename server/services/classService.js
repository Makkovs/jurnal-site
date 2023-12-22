const { Class } = require("../models/models");
const APIError = require("../utils/APIError");

class ClassService {

    async createClass(year, letter, teacherId, schoolId) {
        const candidate = await Class.findOne({
            where: { year, letter, schoolId, classTeacherId: teacherId, }
        });

        if (candidate) {
            APIError.errorAlreadyExist("class");
        };

        const newClass = await Class.create({ year, letter, schoolId, classTeacherId: teacherId, });
        return newClass;
    };

    async deleteClass(classId) {
        const candidate = await Class.findOne({
            where: { id: classId }
        });

        if (!candidate) {
            APIError.errorCandidateNotFound(classId);
        };

        await Class.destroy({ where: { id: classId } });
        return { message: `Class with id ${classId} was deleted!` }
    };

    async setYear(classId, year) {
        const candidate = await Class.findOne({
            where: { id: classId }
        });
        if (!candidate) {
            APIError.errorCandidateNotFound(classId);
        };

        const candidateLetter = await Class.findOne({
            where: { year, letter: candidate.letter, schoolId: candidate }
        });
        if (candidateLetter) {
            APIError.errorAlreadyExist("class")
        };

        await Class.update(
            { year: year },
            { where: { id: classId } }
        );
        return { message: `Class with id ${classId} was updated!` }
    };

    async setLetter(classId, letter) {
        const candidate = await Class.findOne({
            where: { id: classId }
        });
        if (!candidate) {
            APIError.errorCandidateNotFound(classId);
        };

        const candidateYear = await Class.findOne({
            where: { letter, year: candidate.year, schoolId: candidate.schoolId }
        });
        if (candidateYear) {
            APIError.errorAlreadyExist("class");
        };

        await Class.update(
            { letter: letter },
            { where: { id: classId } }
        );
        return { message: `Class with id ${classId} was updated!` }
    };

    async setTeacher(classId, teacherId) {
        const candidate = await Class.findOne({
            where: { id: classId }
        });
        if (!candidate) {
            APIError.errorCandidateNotFound(classId);
        };

        await Class.update(
            { classTeacherId: teacherId },
            { where: { id: classId } }
        );
        return { message: `Class with id ${classId} was updated!` }
    };

    async getOneClass(classId) {
        const candidate = await Class.findOne({
            where: { id: classId}
        });
        if (!candidate){
            APIError.errorCandidateNotFound(classId)
        };

        return candidate;
    };

    async getAllClasses(schoolId) {
        let classes;
        if (!schoolId){
            classes = await Class.findAndCountAll();
        }else {
            classes = await Class.findAndCountAll({
                where: { schoolId }
            });
        };
        
        if (!classes){
            APIError.errorCandidateNotFound(null)
        };
        return classes;
    };
};

module.exports = new ClassService();