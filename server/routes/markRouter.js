const Router = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const markValidator = require("../validators/markValidator");
const markController = require("../controllers/markController");

const router = new Router();

router.post("/add", authMiddleware, markValidator.validateCreateMark, markController.createMark);
router.post("/delete", authMiddleware, markValidator.validateDeleteMark, markController.deleteMark);
router.post("/edit", authMiddleware, markValidator.validateEditMark, markController.editMark);
router.get("/get-all", markValidator.validateGetAllMarks, markController.getAllMarks);

module.exports = router;