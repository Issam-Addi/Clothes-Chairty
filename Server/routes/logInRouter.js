const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const verifyJWT = require("../middleware/verifyJWT");

router.post("/Login_donor", authController.loginDonor, authController.createToken);
router.post("/Login_charity", authController.loginCharity, authController.createToken);
router.post("/Login_admin", authController.loginAdmin, authController.createToken);
router.get("/Verify_token", verifyJWT);


module.exports = router;