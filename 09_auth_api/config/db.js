const { Pool } = require('pg');

const dbPool = new Pool({
  user:  process.env.DB_USER,
  host:  process.env.DB_HOST,
  database:  process.env.DB_NAME,
  port:   process.env.DB_PORT,
  password:  process.env.DB_PASSWORD,
});

module.exports={
     dbPool
}