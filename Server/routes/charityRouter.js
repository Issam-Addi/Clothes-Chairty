const express = require("express");
const router = express.Router();
const charityController = require("../controllers/CharityController");
const authController = require("../controllers/authController");


router.get("/charity", charityController.allCharities);
router.post("/charity", charityController.newCharity, authController.createToken);
router.get("/charity/:id", charityController.oneCharity);
router.put("/charity/:id", charityController.updateCharity);
router.delete("/charity/:id", charityController.deleteCharity);

module.exports = router;