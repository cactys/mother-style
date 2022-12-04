const router = require('express').Router();

const user = require('./user');
const brand = require('./brand');
const thing = require('./thing');
const type = require('./type');

router.use('/user', user);
router.use('/brand', brand);
router.use('/thing', thing);
router.use('/type', type);

module.exports = router;
