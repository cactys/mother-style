const { create, getAll, getOne, deleteOne } = require('../controllers/thing');

const router = require('express').Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOne);
router.delete(':id', deleteOne);

module.exports = router;
