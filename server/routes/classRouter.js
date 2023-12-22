const Router = require("express");

const router = new Router();

const classController = require("../controllers/classController");

router.post("/create", classController.createClass);
router.post("/delete", classController.deleteClass);
router.post("/set-year", classController.setYear);
router.post("/set-letter", classController.setLetter);
router.post("/set-teacher", classController.setTeacher);
router.get("/get", classController.getOneClass);
router.get("/get-all", classController.getAllClasses);

module.exports = router;