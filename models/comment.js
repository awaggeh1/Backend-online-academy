const db = require('../connection');
const { Sequelize } = require('sequelize');
const Student = require ('./student');
const Instructor = require ('./instructor');

const Comment = db.define('comment', {
    idcomment: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    text: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
},{
    tableName: 'comments'
})

// Sincronitza la bdd
db.sync();

/** Relation Student-Comment **/
Student.hasMany(Comment)
Comment.belongsTo(Student);

/** Relation Instructor-Comment **/
Instructor.hasMany(Comment)
Comment.belongsTo(Instructor);

module.exports = Comment;
