const express = require('express');
const router = express.Router();
const Course = require('../models/course');

/** GET ALL Courses **/

router.get('/', (_req, res) =>
    Course.findAll()
    .then(course => res.json(course) )
    .catch(() => res.sendStatus(500))
)

module.exports = router;