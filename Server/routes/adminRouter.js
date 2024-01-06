const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// all donors 
router.get("/dashboard/donors",adminController.allDonors );

// delete donor
router.put("/dashboard/upDonors/:id" , adminController.deleteDonor);

// get all charities active & not deleted
router.get("/dashboard/charitiesActive",adminController.allCharitiesActive );

// get all charities not active & not deleted
router.get("/dashboard/charitiesNotActive",adminController.allCharitiesNotActive );

// accept org request
router.put("/dashboard/acceptOrg/:id",adminController.acceptOrg );

// reject org request
router.delete("/dashboard/rejectOrg/:id",adminController.declineOrg );

// get all donations accepts
router.get("/dashboard/activeDonations" , adminController.allDonationsActive);

// get all donations not accepts
router.get("/dashboard/notActiveDonations" , adminController.allDonationsNotActive);

// accept donation request
router.put("/dashboard/acceptDonation/:id" , adminController.acceptDonation);

// reject donation request
router.delete("/dashboard/rejectDonation/:id" , adminController.rejectDonation);

// get org request on donation
router.get("/dashboard/orgRequestDonation" , adminController.allOrgRequestDonation); 

// accept org request on donation
router.put("/dashboard/acceptOrgRequestDonation/:id", adminController.acceptOrgRequestDonation);

// get all messages
router.get("/dashboard/messages", adminController.allMessages);

// delete messages
router.delete("/dashboard/deleteMessages/:id", adminController.deleteMessage);

// delete donation
router.put("/dashboard/deleteDonation/:id", adminController.deleteDonation);

// Question
router.post("/dashboard/questions", adminController.newQuestions);
router.get("/dashboard/questions", adminController.allQuestions);
router.put("/dashboard/questions/:id", adminController.updateQuestions);
router.delete("/dashboard/questions/:id", adminController.deleteQuestions);




module.exports = router;