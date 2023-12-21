const Router = require("express");

const classRouter = require("./classRouter");
const homeworkRouter = require("./homeworkRouter");
const lessonRouter = require("./lessonRouter");
const markRouter = require("./markRouter");
const schoolRouter = require("./schoolRouter");
const sheduleRouter = require("./sheduleRouter");
const userRouter = require("./userRouter");

const router = new Router();

router.use("/class", classRouter);
router.use("/homework", homeworkRouter);
router.use("/lesson", lessonRouter);
router.use("/mark", markRouter);
router.use("/school", schoolRouter);
router.use("/shedule", sheduleRouter);
router.use("/user", userRouter);

module.exports = router;