const Router = require("express");

const router = new Router();

router.post("/create");
router.post("/delete");
router.post("/set-year");
router.post("/set-letter");
router.post("/set-teacher");
router.get("/get");
router.get("/get-all");

module.exports = router;