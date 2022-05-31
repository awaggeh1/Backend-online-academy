const express = require('express');
const router = express.Router();
const Category = require('../models/category');

/** GET ALL CATEGORIES **/

router.get('/', (_req, res) =>
    Category.findAll()
    .then(category => res.json(category) )
    .catch(() => res.sendStatus(500))
)

/** GET CATEGORY BY ID**/

router.get('/:idcategory', (req, res) =>
    Category.findOne({
        where: {
            idcategory: req.params.idcategory
        }
    })
    .then(category =>{
        res.json(category)
    })
    .catch(error => console.log(error))
)

module.exports = router;