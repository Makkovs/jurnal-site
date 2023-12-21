const Router = require("express");

const router = new Router();

router.post("/create");
router.post("/delete");
router.get("/get");
router.get("/get-all");

module.exports = router;