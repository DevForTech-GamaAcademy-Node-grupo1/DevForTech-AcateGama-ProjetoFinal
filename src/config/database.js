require('dotenv').config()
module.exports = {
    dialect: process.env.APP_DB_DIALECT,
    host: process.env.APP_DB_HOST,
    username: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASSWORD,
    requestTimeout: 100000
};