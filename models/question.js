const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Question  = sequelize.define('question', {
        idquestion: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        point: {
            type: DataTypes.STRING
        }
    })
    return Question
}