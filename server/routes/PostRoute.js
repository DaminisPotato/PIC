const express = require('express');
const router = express.Router();
const {
    checkPostExist,
    find,
    findById,
    create,
    update,
    findThreadPostByCommentsNumber
} = require('../controllers/PostController');
const {authUser} = require('../middleware/authUser');

router.get('/', find);
router.post('/', authUser, create);
router.get('/threads/posts',findThreadPostByCommentsNumber);
router.get('/:id', checkPostExist, findById);
router.patch('/:id', authUser, checkPostExist, update); // normal user can update own information

module.exports = router;