const {pool}=require("pg")



const pool = new Pool({
    host: 'localhost',
    user: 'mr_virat',
    port:5432,
 database:"bookDB"
})


module.exports = pool