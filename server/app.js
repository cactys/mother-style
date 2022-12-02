require('dotenv').config();

const express = require('express');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const sequelize = require('./db');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { error } = require('./errors/internal-server-error');
const { mongo, port } = require('./utils/config');

const { NODE_ENV, PORT, HOST_MONGO_DB, PORT_MONGO_DB, NAME_MOGO_DB } =
  process.env;

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  `mongodb://${NODE_ENV === 'prodaction' ? HOST_MONGO_DB : mongo.host}:${
    NODE_ENV === 'prodaction' ? PORT_MONGO_DB : mongo.port
  }/${NODE_ENV === 'prodaction' ? NAME_MOGO_DB : mongo.name}`,
  {
    useNewUrlParser: true,
  },
);

app.use(requestLogger);

const start = async () => {
  try {
    sequelize.authenticate();
    sequelize.sync();

    app.listen(NODE_ENV === 'prodaction' ? PORT : port, () => {
      console.log(`Сервер запущен: PORT=${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();

app.use(errorLogger);
app.use(errors());

app.use(error);
