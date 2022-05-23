const express = require('express');
const router = express.Router();
const Instructor = require('../models/instructor');

/** GET ALL Instrutor **/

router.get('/', (_req, res) =>
    Instructor.findAll()
    .then(i => res.json(i) )
    .catch(() => res.sendStatus(500))
)

module.exports = router;