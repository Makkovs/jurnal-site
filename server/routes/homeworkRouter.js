const Router = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const homeworkController = require("../controllers/homeworkController");
const homeworkValidator = require("../validators/homeworkValidator");

const router = new Router();

router.post("/add", authMiddleware, homeworkValidator.validateCreateHomework, homeworkController.createHomework);
router.post("/delete", authMiddleware, homeworkValidator.validateDeleteHomework, homeworkController.deleteHomework);
router.post("/edit", authMiddleware, homeworkValidator.validateEditHomework, homeworkController.editHomework);
router.get("/get", homeworkValidator.validateGetHomework, homeworkController.getHomework);

module.exports = router;