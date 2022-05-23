const express = require('express');
const router = express.Router();
const Review = require('../models/review');

/** GET ALL CATEGORIES **/

router.get('/', (_req, res) =>
    Review.findAll()
    .then(r => res.json(r) )
    .catch(() => res.sendStatus(500))
)

module.exports = router;