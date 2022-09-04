require('dotenv').config()
module.exports = {
    database: process.env.APP_DB_NAME,
    username: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASSWORD,
    host: process.env.APP_DB_HOST,
    dialect: process.env.APP_DB_DIALECT,
    requestTimeout: 100000
};