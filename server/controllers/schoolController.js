const errorHandler = require("../utils/errorHandler");
const schoolService = require("../services/schoolService");
const APIError = require("../utils/APIError");

class SchoolController {

    async createSchool(req, res) {
        errorHandler(async () => {
            const { schoolName } = req.body;
            if (!schoolName) {
                APIError.errorUndefinedArg();
            };

            const newSchool = await schoolService.createSchool(schoolName);

            return res.json({ newSchool });
        })(req, res);
    };

    async deleteSchool(req, res) {
        errorHandler(async () => {
            const { schoolId } = req.body;
            if (!schoolId) {
                APIError.errorUndefinedArg();
            };

            await schoolService.deleteSchool(schoolId);

            return res.json({ message: `School with id ${schoolId} was deleted` });
        })(req, res);
    };

    async getSchool(req, res) {
        errorHandler(async () => {
            const { schoolId } = req.query;
            if (!schoolId) {
                APIError.errorUndefinedArg();
            };

            const school = await schoolService.getSchool(schoolId);
            return res.json({ school });
        })(req, res);
    };
};

module.exports = new SchoolController();