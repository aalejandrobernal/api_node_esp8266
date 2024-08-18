// routes/data.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const { verifyToken }= require('../middleware/authMiddleware');

router.post('/', verifyToken,dataController.createData);
router.get('/', verifyToken,dataController.getData);

module.exports = router;
