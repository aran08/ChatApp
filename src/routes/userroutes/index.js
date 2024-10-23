const express = require('express');

const v1UserAuthApi = require('./v1/index');

const router = express.Router();

router.use('/v1', v1UserAuthApi);

module.exports = router;