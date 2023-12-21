const errorHandler = require("../utils/errorHandler");
const classService = require("../services/classService");
class ClassController {

    async createClass (req, res){
        errorHandler(async () => {
            const { year, letter, teacherId, schoolId } = req.body; 
            const newClass = await classService.createClass(year, letter, teacherId, schoolId);

            res.json({ newClass });
        })(req, res);
    };
};

module.exports = new ClassController()