const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Level  = sequelize.define('level', {
        idlevel: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    })
    return Level
}