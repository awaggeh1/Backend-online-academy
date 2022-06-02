const express = require('express');
const router = express.Router();
const Instructor = require('../models/instructor');

/** GET ALL INSTRUCTOR **/

router.get('/', (_req, res) =>
    Instructor.findAll()
    .then(i => res.json(i) )
    .catch(() => res.sendStatus(500))
)


/** GET INSTRUCTOR BY ID **/

router.get('/:idinstructor', (req, res) =>
    Instructor.findOne({
        where: {
            idinstructor: req.params.idinstructor
        }
    })
    .then(i => res.json(i) )
    .catch(() => res.sendStatus(500))
)


module.exports = router;