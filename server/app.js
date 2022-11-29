require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { PORT, HOST_MONGO_DB } = process.env;

const app = express();

mongoose.connect(HOST_MONGO_DB, {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: PORT=${PORT}`);
});
