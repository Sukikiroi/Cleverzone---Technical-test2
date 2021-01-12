const Pool = require('pg').Pool
const pooldb = new Pool({
  user: 'openpg',
  host: 'localhost',
  database: 'Cleverzone',
  password: 'openpgpwd',
  port: 5432,
})


  
module.exports = {
    pooldb,
    
  }