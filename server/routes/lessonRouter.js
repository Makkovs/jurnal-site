const Router = require("express");

const router = new Router();

const lessonController = require("../controllers/lessonController");

router.post("/create", lessonController.createLesson);
router.post("/delete", lessonController.deleteLesson);
router.get("/get", lessonController.getOneLesson);
router.get("/get-all", lessonController.getAllLesson);

module.exports = router;