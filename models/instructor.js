const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Instructor  = sequelize.define('instructor', {
        idinstructor: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        speciality: {
            type: DataTypes.STRING
        },
        about_me: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        img_uri: {
            type: DataTypes.STRING
        }
    })
    return Instructor
}