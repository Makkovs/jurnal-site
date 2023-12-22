const Router = require("express");

const router = new Router();

const schoolController = require("../controllers/schoolController");

router.post("/create", schoolController.createSchool);
router.post("/delete", schoolController.deleteSchool);
router.get("/get", schoolController.getSchool);

module.exports = router;