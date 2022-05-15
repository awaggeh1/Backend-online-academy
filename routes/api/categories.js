const router = require('express').Router();
// Todas las peticiones ya tienen el prefijo /api/category

// GET raiz (http://localhost:4000/api/category)
router.get('/', (req, res) => {
    res.send('Entra correctamente')
});

module.exports = router;