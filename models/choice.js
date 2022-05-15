const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Choice  = sequelize.define('choice', {
        idchoice: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        text: {
            type: DataTypes.STRING
        },
        correct: {
            type: DataTypes.BOOLEAN
        }
    })
    return Choice
}