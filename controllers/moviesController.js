//no haria falta aclarar si el archivo se llama index, pero si se llamara diferente le estamos aclarando nuestro entrypoint

const db = require("../database/models/index")
const Op = db.Sequelize.Op
const {validationResult} = require("express-validator")

module.exports={
    list:(req,res)=>{
        
        db.Movie.findAll({
            order: [["title","ASC"]]
        })

        .then(movies=>{

            res.render("moviesList", {movies})
        })
        .catch(error => console.log(error))
    },
    detail:(req, res)=>{

        let pk = req.params.id

        db.Movie.findByPk(pk)

        .then(movie => {

            res.render("moviesDetail", {movie})
        })
        .catch(error => console.log(error))
    },
    new: (req, res)=>{

        db.Movie.findAll({
            order: [["release_date","DESC"]]
        })

        .then(movies=>{

            res.render("newestMovies", {movies})
        })
        .catch(error => console.log(error))
    },
    recomended: (req, res)=>{

        db.Movie.findAll({
            wehere: {
                rating: {[Op.gte]: 7}
            },
            order: [["rating","DESC"]]
        })

        .then(movies=>{

            res.render("recommendedMovies", {movies})
        })
        .catch(error => console.log(error))
    },
    add: (req,res)=>{
        res.render("moviesAdd")
    },
    create: (req, res)=>{
        let errors = validationResult(req)
        if (errors.errors.length >0){
            return res.render("moviesAdd", {errors: errors.mapped(), oldData: req.body})
        }

        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            length: req.body.length,
            awards: req.body.awards,
            release_date: req.body.release_date,
        })
        .then(creado => res.redirect("/movies"))
    },
    edit: (req, res)=>{
        let pk = req.params.id

        db.Movie.findByPk(pk)
        .then(movie => res.render("moviesEdit", {Movie: movie}))
    },
    update: (req, res)=>{
        let pk = req.params.id

        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            length: req.body.length,
            awards: req.body.awards,
            release_date: req.body.release_date,
        },{
            where: {id: pk}
        })
        .then(movie => res.redirect("/movies"))
    },
    delete: (req, res)=>{
        let pk = req.params.id

        db.Movie.findByPk(pk)
        .then(movie => res.render("moviesDelete", {Movie: movie}))
    },
    destroy: (req, res)=>{
        let pk = req.params.id

        db.Movie.destroy({
            where: {id: pk}
        })
        .then(movie => res.redirect("/movies"))
    }
}