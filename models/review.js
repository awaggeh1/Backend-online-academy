const db = require('../connection');
const { Sequelize } = require('sequelize');

const Review = db.define('review', {
    idreview: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE
    },
    stars: {
        type: Sequelize.INTEGER
    },
    text: {
        type: Sequelize.STRING
    }
},{
    tableName: 'reviews'
})

// Sincronitza la bdd
db.sync();

module.exports = Review;
