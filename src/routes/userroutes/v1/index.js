const express = require('express');

const UserAuthcontroller = require('../../../controllers/user/userauth');

const router = express.Router();

router.post('/signup', UserAuthcontroller.create);

module.exports = router;