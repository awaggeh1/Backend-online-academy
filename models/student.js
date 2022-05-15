const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Student  = sequelize.define('student', {
        idstudent: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        img_uri: {
            type: DataTypes.STRING
        }
    })
    return Student
}