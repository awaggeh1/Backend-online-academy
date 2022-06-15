const express = require('express');
const router = express.Router();
const Student = require('../models/student');

/** CREATE A NEW REVIEW **/
router.post('/', (req, res) => {

    Student.findAll()
    .then(students => {
        // Obtiene todos los ids de los estudiantes 
        let studentsIds = students.map(s => s.user_id)
        // Si existe el user_id, no añade nada a la bdd
        if(studentsIds.includes(req.body.user_id)){
            res.sendStatus(500)
        }
        else{
            // Si no existe el registro, lo crea
            Student.create({
                user_id: req.body.user_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                img_uri: req.body.img_uri
            })
            .then(student => {
                res.send(student)
            })
            .catch(() => res.sendStatus(500))
        }
    })
    .catch(() => res.sendStatus(500)) 
})

/** GET ALL STUDENTS **/
router.get('/', (_req, res) =>
    Student.findAll()
    .then(s => res.json(s) )
    .catch(() => res.sendStatus(500))
)


/** GET STUDENTS by user_id **/
router.get('/:user_id', (req, res) =>
    Student.findOne({
        where: {
            user_id: req.params.user_id
        }
    })
    .then(u => {
        //let id = u.idstudent
        res.json(u)
    })
    .catch(() => res.sendStatus(500))
)


module.exports = router;