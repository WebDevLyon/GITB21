const express = require('express');
const router = express.Router();

const playerCtrl = require('../controllers/player');

router.post('/add', playerCtrl.add);

module.exports = router;