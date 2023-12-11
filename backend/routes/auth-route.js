const express = require('express');
const { loginController, signupController, deleteAccount, editProfile, changePassword } = require('../controller/auth-controller');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.route("/signup").post(signupController);
router.route("/login").post(loginController);
router.route("/delete").delete(authMiddleware,deleteAccount);
router.route("/edit/profile").patch(authMiddleware,editProfile);
router.route("/password").patch(authMiddleware,changePassword);

module.exports = router;