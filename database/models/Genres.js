module.exports = (sequelize, DataTypes) => {

    let alias = "Genre"

    let cols = {
        id: {
            primaryKey: true,
            autoincrement: true,
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        active:{
            type: DataTypes.INTEGER(1),
            allowNull: false
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false,
        underscore: true,
    }

    const Genre = sequelize.define(alias, cols, config)

    return Genre
}