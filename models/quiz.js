const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Quiz  = sequelize.define('quiz', {
        idquiz: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        img_uri: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.TIME
        }
    })
    return Quiz
}