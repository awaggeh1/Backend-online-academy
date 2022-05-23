const express = require('express');
const router = express.Router();
const Student = require('../models/student');

/** GET ALL CATEGORIES **/

router.get('/', (_req, res) =>
    Student.findAll()
    .then(s => res.json(s) )
    .catch(() => res.sendStatus(500))
)

module.exports = router;