const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')

// Configuracion para que la aplicacion pueda recibir peticiones
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Ruta simple de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a la aplicacion de Ali');
}) 

app.use(cors())

// Importacion rutas 
var categoryRouter = require('./routes/categories');
var courseRouter = require('./routes/courses');
var reviewRouter = require('./routes/reviews');
var instructorRouter = require('./routes/instructors');
var studentRouter = require('./routes/students');

// Definicion rutas
app.use('/categories', categoryRouter);
app.use('/courses', courseRouter);
app.use('/reviews', reviewRouter);
app.use('/instructors', instructorRouter);
app.use('/students', studentRouter);

// Permite los cors
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

module.exports = app;