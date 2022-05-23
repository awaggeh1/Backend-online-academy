// // // CREACIÓN DEL SERVIDOR CON EXPRESS

// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const app = express();

// // var createError = require('http-errors');
// // var path = require('path');
// // var cookieParser = require('cookie-parser');
// // var logger = require('morgan');

// // // Configuracion para que la aplicacion pueda recibir peticiones
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: true}));

// // // Inicia la aplicación 
// // app.listen(4000, () => {
// //     console.log('Servidor arrancado')
// // });


// // // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //     next(createError(404));
// //   });
  
// // // error handler
// // app.use(function(err, req, res, next) {
// //     // set locals, only providing error in development
// //     res.locals.message = err.message;
// //     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
// //     // render the error page
// //     res.status(err.status || 500);
// //     res.render('error');
// // });

// // module.exports = app;


// // CREACIÓN DEL SERVIDOR CON EXPRESS
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// // Configuracion para que la aplicacion pueda recibir peticiones
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// var indexRouter = require('./index');
// var categoryRouter = require('./routes/categories');
// // var courseRouter = require('./routes/courses');
// // var instructorRouter = require('./routes/instructors');
// // var levelRouter = require('./routes/levels');
// // var reviewRouter = require('./routes/reviews');
// // var studentRouter = require('./routes/students');

// // Inicia la aplicación 
// app.listen(4000, () => {
//     console.log('Servidor arrancado')
// });


// module.exports = app;

///////////////////////////////////////////////////////


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuracion para que la aplicacion pueda recibir peticiones
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Ruta simple de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a la aplicacion de Ali');
}) 

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


// Inicia la aplicación 
app.listen(4000, () => {
    console.log('Servidor arrancado')
});

module.exports = app;