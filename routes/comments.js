const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Student = require('../models/student');

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