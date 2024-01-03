const { School } = require("../models/models");
const APIError = require("../utils/APIError");

class SchoolService {

    async createSchool(schoolName) {
        const candidate = await School.findOne({ where: { schoolName } });
        if (candidate) {
            throw APIError.errorAlreadyExist("school");
        };

        const newSchool = await School.create({ schoolName });
        return newSchool;
    };

    async deleteSchool(schoolId) {
        const candidate = await School.findOne({ where: { id: schoolId } });
        if (!candidate) {
            throw APIError.errorCandidateNotFound(schoolId);
        };

        await School.destroy({ where: { id: schoolId } });
    };

    async getSchool(schoolId) {
        const school = await School.findOne({ where: { id: schoolId } });
        if (!school) {
            throw APIError.errorCandidateNotFound(schoolId);
        };

        return school;
    };
};

module.exports = new SchoolService();