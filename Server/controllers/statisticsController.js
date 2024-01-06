const Order = require("../models/orderModel");
const errorHandler = require("../middleware/500");
const Charity = require("../models/charityModel");
const Donor = require("../models/donorModel");



const sum = async () => {
    let all = {
      lengthCharty: 0,
      lengthDoner: 0,
      totalPieces: 0,
    };

    try {
        const data = await Charity.find()
          let allCharities = data.length;
          all = { ...all, lengthCharty: allCharities };
    } catch(error) {
      errorHandler(error, req, res);
    };

    
    try {
        const data = await Donor.find()
        let allDonors = data.length;
        all = { ...all, lengthDoner: allDonors };
    } catch(error) {
      errorHandler(error, req, res);
    };
    
    try {
        const result = await Order.aggregate([
            {
              $group: {
                _id: null,
                totalPieces: { $sum: "$number_pieces" },
              },
            },
          ])

          if (result.length > 0) {
            const totalPieces = result[0].totalPieces;
    
            all = { ...all, totalPieces: totalPieces };
          } else {
            console.log("No orders found.");
          }

    } catch(error) {
      errorHandler(error, req, res);
    };
    return all;
}
const statistics = async (req, res) => {
    const obj = await sum()
    res.json(obj);
};
module.exports = { statistics };