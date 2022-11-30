require('dotenv').config();
const { Sequelize } = require('sequelize');
const { postgres } = require('./utils/config');

const {
  NODE_ENV,
  HOST_POSTGRES_DB,
  PORT_POSTGRES_DB,
  NAME_POSTGRES_DB,
  USER_POSTGRES_DB,
  PASSWORD_POSTGRES_DB,
} = process.env;

module.exports = new Sequelize(
  NODE_ENV === 'prodaction' ? NAME_POSTGRES_DB : postgres.name,
  NODE_ENV === 'prodaction' ? USER_POSTGRES_DB : postgres.user,
  NODE_ENV === 'prodaction' ? PASSWORD_POSTGRES_DB : postgres.password,
  {
    dialect: 'postgres',
    host: NODE_ENV === 'prodaction' ? HOST_POSTGRES_DB : postgres.host,
    port: NODE_ENV === 'prodaction' ? PORT_POSTGRES_DB : postgres.port,
  },
);
