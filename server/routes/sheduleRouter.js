const Router = require("express");

const router = new Router();

router.post("/add-lesson");
router.post("/remove-lesson");
router.post("/range-lesson");
router.get("/get");

module.exports = router;