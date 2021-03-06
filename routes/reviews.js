const express = require('express');
const router = express.Router();
const Review = require('../models/review');
const Course = require('../models/course');
const Student = require('../models/student');


/** CREATE A NEW REVIEW **/

router.post('/', (req, res) => {
    Review.create({
        // idreview: req.body.idreview,
        date: req.body.date,
        stars: req.body.stars,
        text: req.body.text,
        courseIdcourse: req.body.courseIdcourse,
        studentIdstudent: req.body.studentIdstudent
    })
    .then(review => res.send(review))
    .catch(() => res.sendStatus(500))
})

/** GET ALL REVIEWS **/

router.get('/', (_req, res) =>
    Review.findAll()
    .then(r => res.json(r) )
    .catch(() => res.sendStatus(500))
)

/** GET REVIEW BY COURSE ID **/
router.get('/course/:idcourse', (req, res) =>
    Review.findAll({
        where: {
            courseIdcourse: req.params.idcourse
        },
        include: [
            {
                model: Course
            },
            {
                model: Student
            }
        ]
    })
    .then(review => res.json(review))
    .catch(() => res.sendStatus(500))
)

// /** GET REVIEW BY INSTRUCTOR ID **/
// router.get('/course/:idcourse', (req, res) =>
//     Review.findAll({
//         where: {
//             courseIdcourse: req.params.idcourse
//         },
//         include: [
//             {
//                 model: Student
//             }
//         ]
//     })
//     .then(review => res.json(review))
//     .catch(() => res.sendStatus(500))
// )


module.exports = router;