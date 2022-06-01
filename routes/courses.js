const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const Instructor = require('../models/instructor');

/** GET ALL Courses **/

router.get('/', (_req, res) =>
    Course.findAll()
    .then(course => res.json(course) )
    .catch(() => res.sendStatus(500))
)

/** GET COURSE BY ID **/
router.get('/:idcourse', (req, res) =>
    Course.findOne({
        where: {
            idcourse: req.params.idcourse
        },
        include: [{
            model: Instructor
        }]
    })
    .then(course => res.json(course))
    .catch(() => res.sendStatus(500))
)

/** GET NUMBER OF COURSES THAT BELONG TO A TEACHER**/
router.get('/instructor/:idinstructor', (req, res) =>
    Course.count({
        where: {
            instructorIdinstructor: req.params.idinstructor
        }
    })
    .then(courses => 
    {
        res.json(courses)
    })
    .catch(() => res.sendStatus(500))
)

module.exports = router;