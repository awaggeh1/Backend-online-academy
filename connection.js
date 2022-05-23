// const mysql = require("mysql");
const Sequelize = require('sequelize');
const dbConfig = require('./db-config');

// LOCAL BDD
const mysqlConnection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT
});

mysqlConnection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = mysqlConnection;
