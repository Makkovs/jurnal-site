const Router = require("express");

const router = new Router();

const lessonController = require("../controllers/lessonController");
const lessonValidator = require("../validators/lessonValidator");

router.post("/create", lessonValidator.validateCreateLesson, lessonController.createLesson);
router.post("/delete", lessonValidator.validateDeleteLesson, lessonController.deleteLesson);
router.get("/get", lessonValidator.validateGetOneLesson, lessonController.getOneLesson);
router.get("/get-all", lessonValidator.validateGetAllLesson, lessonController.getAllLesson);

module.exports = router;