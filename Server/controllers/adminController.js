const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const errorHandler = require("../middleware/500");
const Donor = require("../models/donorModel");
const Charity = require("../models/charityModel");
const Order = require("../models/orderModel");
const CharityMovements = require("../models/charityMovementsModel");
const DonorMovements = require("../models/donorMovementsModel");
const Messages = require("../models/massageDataModel");
const Questions = require("../models/questionsDataModel");



// get all donors from db
const allDonors = (req, res) => {
  Donor.find({ is_delete: false })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// soft delete for donors
const deleteDonor = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await Donor.findById(userId);
    console.log(user);
    user.is_delete = true;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Donor" });
  }
};

// soft delete for donation
const deleteDonation = async (req, res) => {
  try {
    const donationId = req.params.id;

    const donation = await Order.findById(donationId);
    donation.is_delete = true;

    const updatedDonation = await donation.save();

    res.json(updatedDonation);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete donation" });
  }
};

// get all chairties active
const allCharitiesActive = (req, res) => {
  Charity.find({ is_delete: false, active: true })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
// get all chairties not active
const allCharitiesNotActive = (req, res) => {
  Charity.find({ is_delete: false, active: false })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// accept org request
const acceptOrg = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await Charity.findById(userId);
    console.log(user);
    user.active = true;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Donor" });
  }
};
// reject org request
const declineOrg = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedDocument = await Charity.findByIdAndDelete(userId);
    console.log("Document deleted successfully:", deletedDocument);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Donor" });
  }
};

// get all donation with active true and is_delete : false
const allDonationsActive = (req, res) => {
  Order.find({ is_delete: false, active: true })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// get all donation with active false and is_delete : false
const allDonationsNotActive = (req, res) => {
  Order.find({ is_delete: false, active: false })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// accept donation request
const acceptDonation = async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findById(orderId);
    console.log(order);
    order.active = true;
    console.log(order);

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to update donation request" });
  }
};

// reject donation request
const rejectDonation = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedDocument = await Order.findByIdAndDelete(orderId);
    console.log("Document deleted successfully:", deletedDocument);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete donation request" });
  }
};

// get org request on donation
const allOrgRequestDonation = (req, res) => {
  CharityMovements.find({ status: false })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// accept org request on donation
const acceptOrgRequestDonation = async (req, res) => {
  try {
    // 1)
    const userId = req.params.id;
    const user = await CharityMovements.findById(userId);
    user.status = true;
    const updatedUser = await user.save();

    // 2)


    const orderID = user.order_id;
    const chairtyID = user.charity_id;

    const chairty = await Charity.findById(chairtyID);

    const chairtyName = chairty.username

    const query = { order_id: orderID }
    const move = await DonorMovements.findOneAndUpdate(query, { destination: chairtyName, status: true })

    // 3)
    const orderStatus = await Order.findById(orderID);
    orderStatus.available = false;

    const updateStatus = await orderStatus.save();


    console.log(user, move, updateStatus)
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Donor" });
  }
};

// get all messages
const allMessages = (req, res) => {
  Messages.find()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// delete Messages
const deleteMessage = async (req, res) => {
  try {
    const messageID = req.params.id;
    const deletedDocument = await Messages.findByIdAndDelete(messageID);
    console.log("Document deleted successfully:", deletedDocument);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete donation request" });
  }
};

// Questions
const allQuestions = (req, res) => {
  Questions.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const newQuestions = async (req, res) => {

  const { question, answer } = req.body;

  try {
    const newQuestions = new Questions({
      question: question,
      answer: answer,
    });

    const add = await newQuestions.save();

    res.json(add);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateQuestions = async (req, res) => {
  const userId = req.params.id;
  const updatedQuestionsData = req.body;

  const updatedQuestions = await Questions.findByIdAndUpdate(userId, updatedQuestionsData, {
    new: true,
  });

  res.json(updatedQuestions);
};

const deleteQuestions = async (req, res) => {

  try {
    const QuestionId = req.params.id;
    const deletedDocument = await Questions.findByIdAndDelete(QuestionId);

    res.json({"Document deleted successfully:": deletedDocument});
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Questions request" });
  }
};

module.exports = {
  allDonors,
  deleteDonor,
  allCharitiesActive,
  allCharitiesNotActive,
  acceptOrg,
  declineOrg,
  allDonationsActive,
  allDonationsNotActive,
  acceptDonation,
  rejectDonation,
  allOrgRequestDonation,
  acceptOrgRequestDonation,
  allMessages,
  deleteMessage,
  deleteDonation,
  allQuestions,
  newQuestions,
  updateQuestions,
  deleteQuestions,
};
