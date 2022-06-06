const express = require('express');
const router = express.Router();
const StudentHasCourse = require('../models/studentHasCourse');
const Course = require('../models/course');

/** GET ALL STUDENT COURSES **/

router.get('/', (_req, res) =>
    StudentHasCourse.findAll()
    .then(s => res.json(s) )
    .catch(() => res.sendStatus(500))
)

/** GET THE STUDENTS NUMBER THAT BELONG TO A TEACHER**/
router.get('/instructor/:idinstructor', (req, res) =>
    // Encuentra todos los cursoso del instructor especificado 
    Course.findAll({
        where: {
            instructorIdinstructor: req.params.idinstructor
        }
    })
    .then(courses => 
    {
        let coursesIds = courses.map(c => c.idcourse)
        // Encuentra todos los cursos en los cuales está asignado un alumno
        // apartir de los cursos del profesor
        StudentHasCourse.count({
            where: {
                courseIdcourse: coursesIds
            }
        })
        .then((studentHasCourses) => {
            res.json(studentHasCourses)
        })
    })
    .catch(() => res.sendStatus(500))
)


router.get('/:idstudent', (req, res) =>
    StudentHasCourse.findAll({
        where: {
            studentIdstudent: req.params.idstudent
        }
    })
    .then(studentHasCourse => {
        let coursesIds = studentHasCourse.map(s => s.courseIdcourse)

        Course.findAll({
            where: {
                idcourse: coursesIds
            }
        }).then((courses) => {
            res.json(courses)
        })
    } )
    .catch(() => res.sendStatus(500))
)



module.exports = router;