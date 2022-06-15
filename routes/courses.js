const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const Instructor = require('../models/instructor');


/** CREATE A NEW REVIEW **/

router.post('/', (req, res) => {
    Course.create({
        // idreview: req.body.idreview,
        title: req.body.title,
        description: req.body.description,
        level: req.body.level,
        video_uri: req.body.video_uri,
        duration: req.body.duration,
        release: req.body.release,
        categoryIdcategory: req.body.categoryIdcategory,
        instructorIdinstructor: req.body.instructorIdinstructor
    })
    .then(course => res.send(course))
    .catch(() => res.sendStatus(500))
})

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

/** GET ALL COURSES THAT BELONG TO A TEACHER**/
router.get('/instructors/:idinstructor', (req, res) =>
    Course.findAll({
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