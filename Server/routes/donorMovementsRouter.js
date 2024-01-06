const express = require("express");
const router = express.Router();
const donorMovementsController = require("../controllers/donorMovementsController");


router.get("/donor_movement/:id", donorMovementsController.allDonorMovementById);
router.post("/donor_movement_by_email", donorMovementsController.allDonorMovementByEmail);
router.get("/donor_movement", donorMovementsController.allDonorMovement);
router.post("/donor_movement", donorMovementsController.newDonorMovement);
router.put("/donor_movement/:id", donorMovementsController.updateDonorMovement);
router.delete("/donor_movement/:id", donorMovementsController.deleteDonorMovement);

module.exports = router;