require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const sequelize = require('./db');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { port } = require('./utils/config');
const errorHandler = require('./middlewares/ErrorHandlingMiddleware');
const routes = require('./routes');

const { NODE_ENV, PORT } = process.env;

const app = express();

app.use(cors());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(requestLogger);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

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

app.use(errorHandler);
