const { Class } = require("../models/models");
const errorHandler = require("../utils/errorHandler");

class ClassService {

    async createClass (year, letter, teacherId, schoolId){
        const candidate = await Class.findOne({
            where: { year, letter, teacherId, schoolId }
        });

        if (candidate){
            throw new Error("This class is already exist!");
        };

        const newClass = await Class.create({ year, letter, teacherId, schoolId });
        return newClass;
    };
};

module.exports = new ClassService();