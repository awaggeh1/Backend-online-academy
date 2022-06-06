const express = require('express');
const router = express.Router();
const Student = require('../models/student');

/** CREATE A NEW REVIEW **/
router.post('/', (req, res) => {
    Student.create({
        idstudent: req.body.idstudent,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        img_uri: req.body.img_uri,
        instructorIdinstructor: req.body.instructorIdinstructor
    })
    .then(user => res.send(user))
    .catch(() => res.sendStatus(500))
})

/** GET ALL STUDENTS **/
router.get('/', (_req, res) =>
    Student.findAll()
    .then(s => res.json(s) )
    .catch(() => res.sendStatus(500))
)

module.exports = router;