const Router = require("express");

const router = new Router();

const classController = require("../controllers/classController");
const classValidator = require("../validators/classValidator");

router.post("/create", classValidator.validateCreateClass, classController.createClass);
router.post("/delete", classValidator.validateDeleteClass, classController.deleteClass);
router.post("/set-year", classValidator.validateSetYear, classController.setYear);
router.post("/set-letter", classValidator.validateSetLetter, classController.setLetter);
router.post("/set-teacher", classValidator.validateSetTeacher, classController.setTeacher);
router.get("/get", classValidator.validateGetOneClass, classController.getOneClass);
router.get("/get-all", classValidator.validateGetAllClasses, classController.getAllClasses);

module.exports = router;