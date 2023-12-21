const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const School = sequelize.define("school", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    schoolname: { type: DataTypes.STRING, allowNull: false },
});

const Class = sequelize.define("class", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    year: { type: DataTypes.INTEGER, allowNull: false },
    letter: { type: DataTypes.STRING, allowNull: false },
    classTeacherId: { type: DataTypes.INTEGER },
});

const Lesson = sequelize.define("lesson", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

const Shedule = sequelize.define("shedule", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    fathername: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
});

const Homework = sequelize.define("homework", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    body: { type: DataTypes.TEXT, allowNull: false }
});

const Mark = sequelize.define("mark", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.DATE, allowNull: false },
    number: { type: DataTypes.INTEGER, allowNull: false },
});

School.hasMany(Class);
Class.belongsTo(School);

School.hasMany(Lesson);
Lesson.belongsTo(School);

School.hasMany(User);
User.belongsTo(School);

Class.hasMany(User);
User.belongsTo(Class);

Class.hasMany(Shedule);
Shedule.belongsTo(Class);

Class.hasMany(Homework);
Homework.belongsTo(Class);

Lesson.hasMany(Mark);
Mark.belongsTo(Lesson);

Lesson.belongsToMany(Shedule, { through: "SheduleLesson" });
Shedule.belongsToMany(Lesson, { through: "SheduleLesson" });

User.hasMany(Mark);
Mark.belongsTo(User);

User.hasMany(Homework);
User.belongsTo(Homework);

module.exports = {
    School,
    Class,
    Lesson,
    Shedule,
    User,
    Homework,
    Mark
};