const CharityMovements = require("../models/charityMovementsModel");
const errorHandler = require("../middleware/500");

const allCharityMovement = (req, res) => {
    CharityMovements.find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            errorHandler(error, req, res);
        });
};

const isMovementExisting = async (req, res) => {
    const { email, order_id } = req.body;

    const movement = await CharityMovements.find({ email: email, order_id: order_id  });

    if (movement.length > 0)
        res.json({ massage: "movement already exists", status: false});
    else
        res.json({ massage: "movement not exists", status: true});
};

const allCharityMovementById = async (req, res) => {
    const id = req.params.id;
    const movement = await CharityMovements.find({ _id: id });
    res.json(movement);
};

const allCharityMovementByEmail = async (req, res) => {
    const { email } = req.body;
    const movement = await CharityMovements.find({ email: email });
    res.json(movement);
};

const newCharityMovement = async (req, res) => {

    const { order_id, charity_id, email, destination } = req.body;

    const currentDate = new Date();

    const newCharityMovements = new CharityMovements({
        status: false,
        email: email,
        destination: destination,
        date: currentDate.toLocaleString(),
        order_id: order_id,
        charity_id: charity_id,
    });

    const movement = await newCharityMovements.save();

    res.json(movement);
};

const updateCharityMovement = async (req, res) => {
    const userId = req.params.id;
    const updatedMovementData = req.body;

    const user = await CharityMovements.findByIdAndUpdate(userId, updatedMovementData, { new: true });
    const movement = await user.save();
    res.json(movement);
};

const deleteCharityMovement = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedMovementData = req.body;

        updatedMovementData.is_delete = true;


        const move = await CharityMovements.findByIdAndUpdate(userId, updatedMovementData, {
            new: true,
        });

        const movement = await move.save();

        res.json(movement);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update CharityMovements' });
    }
};


module.exports = {
    allCharityMovement,
    allCharityMovementById,
    allCharityMovementByEmail,
    newCharityMovement,
    updateCharityMovement,
    deleteCharityMovement,
    isMovementExisting,
}; 