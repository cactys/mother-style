const uuid = require('uuid');
const path = require('path');

const { Thing } = require('../models/models');
const ApiError = require('../errors/ApiError');

module.exports.create = (req, res, next) => {
  const { name, price, brandId, typeId, info } = req.body;
  const { image } = req.files;
  let fileName = uuid.v4() + '.jpg';
  image.mv(path.resolve(__dirname, '..', 'static', fileName));

  Thing.create({ name, price, brandId, typeId, image: fileName })
    .then(thing => {
      res.json(thing);
    })
    .catch(err => next(ApiError.badRequest(err.message)));
};

module.exports.getAll = (req, res, next) => {
  const { brandId, typeId } = req.query;

  console.log(brandId);

  Thing.findAll({ brandId, typeId }).then(things => {
    console.log(brandId);
  });
};

module.exports.getOne = (req, res) => {};

module.exports.deleteOne = (req, res) => {};
