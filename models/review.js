const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Review  = sequelize.define('review', {
        idreview: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE
        },
        stars: {
            type: DataTypes.INTEGER
        },
        text: {
            type: DataTypes.STRING
        }
    })
    
    return Review
}