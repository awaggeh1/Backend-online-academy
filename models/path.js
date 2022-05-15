const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Path  = sequelize.define('path', {
        idpath: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    })
    return Path
}