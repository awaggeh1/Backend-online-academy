
const db = require('../connection');
const { Sequelize } = require('sequelize');

const Instructor = db.define('instructor', {
        
    idinstructor: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    speciality: {
        type: Sequelize.STRING
    },
    about_me: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    img_uri: {
        type: Sequelize.STRING
    }
},{
    tableName: 'instructors'
})

module.exports = Instructor;
