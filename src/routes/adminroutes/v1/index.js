const express = require('express');

const AdminAuthController = require('../../../controllers/admin/adminauth');

const router = express.Router();

router.post('/signup', AdminAuthController.create);

module.exports = router;