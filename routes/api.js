// Manejador de rutas
const router = require('express').Router();

const apiCategoryRouter = require('./api/categories')

router.use('/category', apiCategoryRouter);

module.exports = router;


