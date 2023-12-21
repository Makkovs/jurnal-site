const Router = require("express");

const router = new Router();

router.post("/add");
router.post("/delete");
router.post("/range-class");
router.get("/get");
router.get("/get-all");

module.exports = router;