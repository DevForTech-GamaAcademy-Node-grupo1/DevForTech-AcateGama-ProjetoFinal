const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js')

const connection = new Sequelize.Connection(dbConfig);

module.exports = connection;
