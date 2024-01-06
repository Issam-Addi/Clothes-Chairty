const DonorMovements = require("../models/donorMovementsModel");
const errorHandler = require("../middleware/500");

const allDonorMovement = (req, res) => {
    DonorMovements.find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            errorHandler(error, req, res);
        });
};

const allDonorMovementById = async (req, res) => {
    const id = req.params.id;
    const movement = await DonorMovements.find({ _id: id });
    res.json(movement);
};

const allDonorMovementByEmail = async (req, res) => {
    const { email } = req.body;
    const movement = await DonorMovements.find({ email: email });
    res.json(movement);
};

const newDonorMovement = async (req, res) => {

    const {  order_id, donor_id, email } = req.body;

    const currentDate = new Date();
    const newDonorMovements = new DonorMovements({
        status: false,
        email: email,
        destination: '',
        date: currentDate.toLocaleString(),
        order_id: order_id,
        donor_id: donor_id,
    });

    const movement = await newDonorMovements.save();

    res.json(movement);
};

const updateDonorMovement = async (req, res) => {
    const userId = req.params.id;
    const updatedMovementData = req.body;

    const move = await DonorMovements.findByIdAndUpdate(userId, updatedMovementData, { new: true });
    const movement = await move.save();
    res.json(movement);
};

const deleteDonorMovement = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedMovementData = req.body;

        updatedMovementData.is_delete = true;

        const move = await donorMovements.findByIdAndUpdate(userId, updatedMovementData, {
            new: true,
        });

        const movement = await move.save();

        res.json(movement);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update donorMovements' });
    }
};


module.exports = {
    allDonorMovement,
    newDonorMovement,
    updateDonorMovement,
    deleteDonorMovement,
    allDonorMovementById,
    allDonorMovementByEmail,
}; 