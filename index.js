// CREACIÓN DEL SERVIDOR CON EXPRESS
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./routes/api') ;
const Sequelize = require('sequelize');
const dbConfig = require('./db-config');

// Connexion con la base de datos 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT
});

// Testear la connexion
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Vaig afegint els models
db.category = require("./models/category")(sequelize, Sequelize);
db.choice = require("./models/choice")(sequelize, Sequelize);
db.course = require("./models/course")(sequelize, Sequelize);
db.instructor = require("./models/instructor")(sequelize, Sequelize);
db.level = require("./models/level")(sequelize, Sequelize);
db.path = require("./models/path")(sequelize, Sequelize);
db.question = require("./models/question")(sequelize, Sequelize);
db.quiz = require("./models/quiz")(sequelize, Sequelize);
db.review = require("./models/review")(sequelize, Sequelize);
db.student = require("./models/student")(sequelize, Sequelize);

// Faltan el instructor_has_corse i el strudent_has_course

//   Sync con la base de datos
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

// Configuracion para que la aplicacion pueda recibir peticiones
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Inicia la aplicación 
app.listen(4000, () => {
    console.log('Servidor arrancado')
});

// Todas las peticiones con el prefijo api, las manda al apiRouter
app.use('/api', apiRouter);

module.exports = db;