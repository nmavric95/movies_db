module.exports = (sequelize, DataTypes) =>{

    let alias = "Movie"

    let cols = {
        id:{
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoincrement: true,
            
        },
        title:{
            type: DataTypes.STRING(500),
            allowNull: true
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        length:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        awards:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        release_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
    }

    let config = {
        tableName: "movies",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
    }

    const Movie = sequelize.define(alias, cols, config)

    return Movie
}