var Sequelize = require("sequelize");
var config = require("./index");

const sequelize = new Sequelize(config.database, config.username, config.pwd, {
  host: config.sqllink,
  dialect: config.database,
});
module.exports = sequelize;
