const {Router} = require('express');
const { userGet, userPut, userPost,userPatch,userDelete } = require('../controllers/users');

const router = Router();

router.get('/', userGet);
router.post('/', userPost);
router.put('/', userPut);
router.patch('/', userPatch);
router.delete('/:id', userDelete);

module.exports = router;