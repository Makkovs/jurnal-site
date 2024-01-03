const Router = require("express");

const router = new Router();

const schoolController = require("../controllers/schoolController");
const schoolValidator = require("../validators/schoolValidator");

router.post("/create", schoolValidator.validateCreateSchool, schoolController.createSchool);
router.post("/delete", schoolValidator.validateDeleteSchool, schoolController.deleteSchool);
router.get("/get", schoolValidator.validateGetSchool, schoolController.getSchool);

module.exports = router;