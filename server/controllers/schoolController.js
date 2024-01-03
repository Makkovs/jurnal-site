const schoolService = require("../services/schoolService");

class SchoolController {

    async createSchool(req, res, next) {
        try {
            const { schoolName } = req.body;

            const newSchool = await schoolService.createSchool(schoolName);
            return res.json({ newSchool });
        } catch (error) {
            next(error);
        };
    };

    async deleteSchool(req, res, next) {
        try {
            const { schoolId } = req.body;

            await schoolService.deleteSchool(schoolId);
            return res.json({ message: `School with id ${schoolId} was deleted` });
        } catch (error) {
            next(error);
        };
    };

    async getSchool(req, res, next) {
        try {
            const { schoolId } = req.query;

            const school = await schoolService.getSchool(schoolId);
            return res.json({ school });
        } catch (error) {
            next(error);
        };
    };
};

module.exports = new SchoolController();