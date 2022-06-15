const db = require('../connection');
const { Sequelize } = require('sequelize');

const Category = db.define('category', {
    idcategory: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
},{
    tableName: 'categories'
})

// Sincronitza la bdd
db.sync();

module.exports = Category;
