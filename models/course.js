const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Course  = sequelize.define('course', {
        idcourse: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        video_uri: {
            type: DataTypes.STRING
        },
        img_uri: {
            type: DataTypes.STRING
        },
        finished: {
            type: DataTypes.BOOLEAN
        },
        duration: {
            type: DataTypes.TIME
        },
        release: {
            type: DataTypes.DATE
        }
    })
    return Course
}