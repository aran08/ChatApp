const express = require('express');

const v1UserApi = require('./v1/index');

const router = express.Router();

router.use('/v1', v1UserApi);

module.exports = router;