const { User, School } = require("../models/models");
const hashPassword = require("../utils/hashPassword");
const generateJwt = require("../utils/generateJwt");
const APIError = require("../utils/APIError");
const bcrypt = require("bcrypt");

class UserService {

    async createUser(login, name, surname, fathername, password, role, schoolId, classId) {
        const loginCandidate = await User.findOne({ where: { login } });
        if (loginCandidate) {
            throw APIError.errorAlreadyExist("login");
        };

        const schoolCandidate = await School.findOne({ where: { id: schoolId } });
        if (!schoolCandidate) {
            throw APIError.errorCandidateNotFound("School", "id", schoolId);
        };

        const passwordHash = await hashPassword(password);
        const user = await User.create({ login, name, surname, fathername, role, schoolId, classId, password: passwordHash });
        const token = generateJwt(user.id, user.name, user.surname, user.fathername, user.role, user.schoolId, user.classId);
        return token;
    };

    async loginUser(login, password) {
        const userCandidate = await User.findOne({ where: { login } });
        if (!userCandidate) {
            throw APIError.errorCandidateNotFound("User", "login", login);
        };

        let comparePassword = bcrypt.compareSync(password, userCandidate.password);
        if (!comparePassword) {
            throw APIError.errorIncorrectPassword();
        };

        const token = generateJwt(userCandidate.id, userCandidate.name, userCandidate.surname, userCandidate.fathername, userCandidate.role, userCandidate.schoolId, userCandidate.classId);
        return token;
    };

    async rangeClassUser(userId, toClassId) {
        const userCandidate = await User.findOne({ where: { id: userId } });
        if (!userCandidate) {
            throw APIError.errorCandidateNotFound("User", "id", userId);
        };

        const classCandidate = await User.findOne({ where: { id: toClassId } });
        if (!classCandidate) {
            throw APIError.errorCandidateNotFound("Class", "id", toClassId);
        };

        await User.update(
            { classId: toClassId },
            { where: { id: userId } }
        );

        return { message: `User with id ${userId} ranged to class with id ${toClassId}!` };
    };

    async getOneUser(userId) {
        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            throw APIError.errorCandidateNotFound("User", "id", userId);
        };

        return {
            userProfile: {
                userId: user.id,
                name: user.name,
                surname: user.surname,
                fathername: user.fathername,
                role: user.role,
                schoolId: user.schoolId,
                classId: user.classId
            }
        };
    };

    async getAllUsers(classId, schoolId, limit, offset) {
        let users;
        if (!classId) {
            users = await User.findAndCountAll({ where: { schoolId: schoolId } });
        } else {
            users = await User.findAndCountAll({ where: { schoolId: schoolId, classId: classId }, limit, offset })
        };

        return users;
    };

    async checkUserToken(id, name, surname, fathername, role, schoolId, classId) {
        const token = generateJwt(id, name, surname, fathername, role, schoolId, classId);
        return token;
    };
};

module.exports = new UserService();