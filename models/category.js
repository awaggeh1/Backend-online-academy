const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Category  = sequelize.define('category', {
        idcategory: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    })
    return Category
}