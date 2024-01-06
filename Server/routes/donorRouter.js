const express = require("express");
const router = express.Router();
const donorController = require("../controllers/donorController");
const authController = require("../controllers/authController");


router.get("/donor", donorController.allDonors);
router.post("/donor", donorController.newDonor, authController.createToken);
router.get("/donor/:id", donorController.oneDonor);
router.put("/donor/:id", donorController.updateDonor);
router.delete("/donor/:id", donorController.deleteDonor);

module.exports = router;