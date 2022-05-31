const db = require('../connection');
const { Sequelize } = require('sequelize');
const Category = require ('./category');
const Review = require ('./review');
const Instructor = require ('./instructor');

const Course = db.define('course', {
        idcourse: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.STRING
        },
        video_uri: {
            type: Sequelize.STRING
        },
        img_uri: {
            type: Sequelize.STRING
        },
        finished: {
            type: Sequelize.BOOLEAN
        },
        duration: {
            type: Sequelize.TIME
        },
        release: {
            type: Sequelize.DATE
        }
},{
    tableName: 'courses'
})
// Sinconitza la bdd
db.sync();
// db.sync({force: true});

/** Relation Course-Category **/
Category.hasMany(Course)
Course.belongsTo(Category);

/** Relation Course-Review **/
Course.hasMany(Review)
Review.belongsTo(Course);

/** Relation Course-Instructor **/
Instructor.hasMany(Course)
Course.belongsTo(Instructor);

module.exports = Course;