const router = require('express').Router();
const {
  login,
  registration,
  signOut,
  check,
  deleteOne,
} = require('../controllers/user');

router.post('/signin', login); // login
router.post('/signup', registration); // registration
router.get('/signout', signOut); // log out
router.get('/auth', check);
router.delete('/auth/:id', deleteOne);

module.exports = router;
