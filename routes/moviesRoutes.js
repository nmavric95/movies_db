const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const {body} = require("express-validator")

const validacionesCreate = [
    body("title").notEmpty().withMessage("Tenes que completar el nombre de la película"),
    body("rating").notEmpty().withMessage("Tenes que completar el rating de la película").isNumeric().withMessage("Debes ingresar un rating en formato numérico"),
    body("awards").notEmpty().withMessage("Tenes que completar la cantidad de premios que tiene la película").isNumeric().withMessage("Debes ingresar la cantidad en formato numérico"),
    body("release_date").notEmpty().withMessage("Tenes que completar la fecha de lanzamiento de la película").isNumeric().withMessage("Debes ingresar una fecha"),
    body("length").notEmpty().withMessage("Tenes que completar la duración de la película").isNumeric().withMessage("Debes ingresar una duración en milisegundos")
]

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);

router.get("/movies/add", moviesController.add)
router.post("/movies/create", validacionesCreate, moviesController.create)

router.get("/movies/edit/:id/", moviesController.edit)
router.put("/movies/update/:id", moviesController.update)
router.delete("/movies/delete/:id", moviesController.delete)

module.exports = router;