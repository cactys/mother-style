const { Type } = require('../models/models');
const ApiError = require('../errors/ApiError');

module.exports.create = (req, res, next) => {
  const { name } = req.body;

  Type.create({ name })
    .then(name => res.json(name))
    .catch(err => next(ApiError.badRequest(err.message)));
};

module.exports.getAll = (req, res, next) => {
  Type.findAll()
    .then(types => {
      res.json(types);
    })
    .catch(err => next(ApiError.badRequest(err.message)));
};

module.exports.deleteOne = (req, res) => {};
