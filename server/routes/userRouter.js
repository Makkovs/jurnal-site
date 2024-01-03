const Router = require("express");
const userController = require("../controllers/userController");
const userValidator = require("../validators/userValidator");
const authMiddleware = require("../middlewares/authMiddleware");

const router = new Router();

router.post("/create", userValidator.validateCreateUser, userController.createUser);
router.post("/login", userValidator.validateLoginUser, userController.loginUser);
router.post("/range-class", authMiddleware, userValidator.validateRangeClassUser, userController.rangeClassUser);
router.post("/auth", authMiddleware, userController.checkUserToken);
router.get("/get", userValidator.validateGetOneUser, userController.getOneUser);
router.get("/get-all", userValidator.validateGetAllUsers, userController.getAllUsers);

module.exports = router;