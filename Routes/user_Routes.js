const express = require("express");
const { getSignUp, postSignUp, getLogin, postLogin } = require("../controllers/user_controller");
const router = express.Router()
router.route("/").get(getSignUp)
router.route("/signup").post(postSignUp)
router.route("/login").get(getLogin).post(postLogin)
module.exports = router;