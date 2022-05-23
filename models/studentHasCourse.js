const db = require('../connection');
const { Sequelize } = require('sequelize');
const Student = require ('./student');
const Course = require ('./course');

const StudentHasCourse = db.define('student_has_course', {
    studentIdstudent: {
        type: Sequelize.INTEGER,
        references: {
            model: Student,
            key: 'idstudent'
        }
    },
    courseIdcourse: {
        type: Sequelize.INTEGER,
        references: {
            model: Course,
            key: 'idcourse'
        }
    },
},{
    tableName: 'student_has_course'
})

// Sincronitza la bdd
db.sync();

module.exports = StudentHasCourse;
