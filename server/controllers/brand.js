const { Brand } = require('../models/models');
const ApiError = require('../errors/ApiError');

module.exports.create = (req, res, next) => {
  const { name } = req.body;

  Brand.create({ name })
    .then(brand => res.json(brand))
    .catch(err => next(ApiError.badRequest(err.massage)));
};

module.exports.getAll = (req, res, next) => {
  Brand.findAll()
    .then(brands => res.json(brands))
    .catch(err => next(ApiError.badRequest(err.message)));
};

module.exports.deleteOne = (req, res) => {};
