const express = require('express');
const app = express();

app.listen(3000, () => console.log('Server started on port 3000'));

const { Pool } = require('pg');
const pool = new Pool({
  user: 'myuser',
      host: 'localhost',
      database: 'marocraftdatabase',
      password: 'mypassword',
      port: 5432,
    });
    const sql = `SELECT * FROM test`;

    pool.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }

      setData(result.rows);
    });

    pool.end();