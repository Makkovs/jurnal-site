const APIError = require("../utils/APIError");
const userService = require("../services/userService");

class UserController {

    async createUser(req, res, next) {
        try {
            const { login, name, surname, fathername, password, role, schoolId } = req.body;
            const classId = req.body.classId ? req.body.classId : null;

            const userToken = await userService.createUser(login, name, surname, fathername, password, role, schoolId, classId);
            return res.json({ userToken });
        } catch (error) {
            next(error);
        };
    };

    async loginUser(req, res, next) {
        try {
            const { login, password } = req.body;

            const userToken = await userService.loginUser(login, password);
            return res.json({ userToken });
        } catch (error) {
            next(error);
        };
    };

    async rangeClassUser(req, res, next) {
        try {
            const { userId, toClassId } = req.body;

            const message = await userService.rangeClassUser(userId, toClassId);
            return res.json({ message });
        } catch (error) {
            next(error);
        };
    };

    async getOneUser(req, res, next) {
        try {
            const { userId } = req.query;
            if (!userId) {
                APIError.errorUndefinedArg();
            };

            const profile = await userService.getOneUser(userId);
            return res.json({ profile });
        } catch (error) {
            next(error);
        };
    };

    async getAllUsers(req, res, next) {
        try {
            const { classId, schoolId } = req.query;
            let { page, limit } = req.query;
            page = page || 1;
            limit = limit || 9;
            const offset = page * limit - limit;

            const users = await userService.getAllUsers(classId, schoolId, limit, offset);
            return res.json({ users });
        } catch (error) {
            next(error);
        };
    };

    async checkUserToken(req, res, next) {
        try {
            const token = await userService.checkUserToken(req.user.id, req.user.name, req.user.surname, req.user.fathername, req.user.role, req.user.classId, req.user.schoolId);
            return res.json({ token });
        } catch (error) {
            next(error);
        };
    };
};

module.exports = new UserController();