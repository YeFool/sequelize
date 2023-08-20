const {Sequelize} = require("sequelize")

const connection = new Sequelize(process.env.MYSQL_URI, {
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
})

console.log("DB connection is working")

module.exports = connection