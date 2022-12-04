const ApiError = require('../errors/ApiError');

async function registration(req, res) {}

async function login(req, res) {}

async function check(req, res, next) {
  const { id } = req.query;

  if (!id) {
    return next(ApiError.badRequest('Не задан ID'));
  }

  res.json(id);
}

async function signOut(req, res) {}

async function deleteOne(req, res) {}

module.exports = {
  registration,
  login,
  check,
  signOut,
  deleteOne,
};
