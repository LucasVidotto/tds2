const Config = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: Config.HOST,
  dialect: Config.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

const db = require("./app/models");
db.sequelize.sync();

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Dates = require("./model.js")(sequelize, Sequelize);

module.exports = db;