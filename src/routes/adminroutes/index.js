const express = require('express');

const V1AdminAuth = require('./v1/index');

const router = express.Router();

router.use('/v1', V1AdminAuth);

module.exports = router;