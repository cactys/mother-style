const { create, getAll, deleteOne } = require('../controllers/brand');

const router = require('express').Router();

router.post('/', create);
router.get('/', getAll);
router.delete('/:id', deleteOne);

module.exports = router;
