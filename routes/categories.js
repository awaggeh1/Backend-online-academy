const express = require('express');
const router = express.Router();
const Category = require('../models/category');

/** GET ALL CATEGORIES **/

router.get('/', (_req, res) =>
    Category.findAll()
    .then(category => res.json(category) )
    .catch(() => res.sendStatus(500))
)

module.exports = router;