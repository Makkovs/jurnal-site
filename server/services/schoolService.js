const { School } = require("../models/models");
const APIError = require("../utils/APIError");

class SchoolService {

    async createSchool(schoolName) {
        const newSchool = await School.create({ schoolName });
        return newSchool;
    };

    async deleteSchool(schoolId) {
        const candidate = await School.findOne({ where: { id: schoolId } });
        if (!candidate) {
            APIError.errorCandidateNotFound(schoolId);
        };

        await School.destroy({ where: { id: schoolId } });
    };

    async getSchool(schoolId) {
        const school = await School.findOne({where: { id: schoolId}});
        if (!school){
            APIError.errorCandidateNotFound(schoolId);
        };

        return school;
    };
};

module.exports = new SchoolService();