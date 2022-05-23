const db = require('../connection');
const { Sequelize } = require('sequelize');
const Review = require ('./review');
const Course = require('./course');
const StudentHasCourse = require('./studentHasCourse');

const Student = db.define('student', {
    idstudent: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    img_uri: {
        type: Sequelize.STRING
    }
},{
    tableName: 'students'
})

// Sincronitza la bdd
db.sync();

/** Relation Student-Review **/
Student.hasMany(Review)
Review.belongsTo(Student);



/** Relation Student-Course **/
Student.belongsToMany(Course, {
    through: StudentHasCourse,
    foreingKey: 'studentIdstudent'
})

Course.belongsToMany(Student, {
    through: StudentHasCourse,
    foreingKey: 'courseIdcourse',
    as: 'StudentCourse'
})



module.exports = Student;
