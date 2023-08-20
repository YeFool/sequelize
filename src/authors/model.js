const { DataTypes} = require("sequelize")

const connection = require("../db/connection")

const Author = connection.define("Author", {
    authorName: {
        type: DataTypes.STRING,
        allowNull: false, // every book must have a title
        unique: true // every title must be unquie in the table
    }

}) 

module.exports = Author;