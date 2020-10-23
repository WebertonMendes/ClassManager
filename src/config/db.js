const { Pool } = require("pg")

module.exports = new Pool({
    user: "weberton",
    password: "wmi20051987WMI",
    host: "localhost",
    port: 5432,
    database: "classmanager"
})