const Genres = require("../database/models/Genres")
const db = require("../database/models/index")
const Op = db.Sequelize.Op

module.exports = {
    list: (req, res) => {
        db.Genre.findAll({
            order:[["name", "DESC"]]
        })
        .then(genres => {
            res.render("genresList", {genres})
        })
        .catch(error => console.log(error))
    },
    detail: (req, res) => {
        
        let pk = req.params.id

        db.Genre.findByPk(pk)
        .then(genre => {
            res.render("genresDetail", {genre})
        })
        .catch(error => console.log(error))
    }
}