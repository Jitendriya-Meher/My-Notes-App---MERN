const express = require('express');
const { contactUs } = require('../controller/contact-controller');
const router = express.Router();

router.route("/").post(contactUs);

module.exports = router;