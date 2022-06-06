const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Student = require('../models/student');

/** CREATE A NEW REVIEW **/
router.post('/', (req, res) => {
    Comment.create({
        // idcomment: req.body.idcomment,
        text: req.body.text,
        date: req.body.date,
        studentIdstudent: req.body.studentIdstudent,
        instructorIdinstructor: req.body.instructorIdinstructor
    })
    .then(comment => res.send(comment))
    .catch(() => res.sendStatus(500))
})

/** GET ALL COMMENTS **/

router.get('/', (_req, res) =>
    Comment.findAll()
    .then(c => res.json(c))
    .catch(() => res.sendStatus(500))
)

/** GET ALL COMMENTS BY INSTRUCTOR ID **/
router.get('/instructor/:idinstructor', (req, res) =>
    Comment.findAll({
        where: {
            instructorIdinstructor: req.params.idinstructor
        },
        include: [
            {
                model: Student
            }
        ]
    })
    .then(c => res.json(c))
    .catch(() => res.sendStatus(500))
)

module.exports = router;