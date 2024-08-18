// routes/post.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { verifyToken }= require('../middleware/authMiddleware');

router.post('/', verifyToken,postController.createPost);
router.get('/', verifyToken,postController.getPosts);

module.exports = router;
