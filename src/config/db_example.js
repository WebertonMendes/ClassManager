const { Pool } = require("pg")

module.exports = new Pool({
    user: "database_user",
    password: "database_password",
    host: "localhost or database_ip",
    port: 5432,
    database: "database_name"
})