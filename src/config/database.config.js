import mysql from 'mysql';
import { Config } from './config';
const { promisify } = require('util');

const poolConn = mysql.createPool({
    connectionLimit: Config.connectionLimit,
    host: Config.host,
    user: Config.user,
    password: Config.password,
    database: Config.database,
    charset: 'utf8mb4',
});

const testQuery = 'SELECT 1 + 1 AS solution';
poolConn.query(testQuery, (err, results, fields) => {
    if (err) throw err;
    console.log('The solution is: ', results[0].solution);
    poolConn.query = promisify(poolConn.query);
});

export default poolConn;
