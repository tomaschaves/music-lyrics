// src/config/config.js
const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'music-lyrics',
  database: process.env.MYSQL_DATABASE || 'lyrics',
  dialect: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};