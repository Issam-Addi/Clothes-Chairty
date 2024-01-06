const Donor = require("../models/donorModel");
const bcrypt = require('bcrypt');
const errorHandler = require("../middleware/500");

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

const oneDonor = async (req, res) => {
    const id = req.params.id;
    const user = await Donor.find({ _id: id, is_delete: false });
    res.json(user);
};

const newDonor = async (req, res, next) => {

    const { username, email, password, phone } = req.body;

    try {
        const user = await Donor.findOne({ email: email });
        if (user) {
            return res.status(401).send("Email already taken");
        }
    } catch (error) {
        errorHandler(error, req, res);
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const newDonor = new Donor({
        role: 'donor',
        username: username,
        email: email,
        password: hashedPwd,
        phone: phone
    });

    const user = await newDonor.save();

    req.body = user;
    next();
};

const updateDonor = async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;

    const userData = await Donor.findById(userId);

    if (!updatedUserData || updatedUserData.is_delete) {
        return res.status(401).send('User not found');
    }

    if (!(await bcrypt.compare(userData.password, updatedUserData.password))) {

        return res.status(401).send("incorrect password");
    }

    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
    const user = await Donor.findByIdAndUpdate(userId, updatedUserData, { new: true });
    const updatedUser = await user.save();
    res.json(updatedUser);
};

const deleteDonor = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;

        updatedUserData.is_delete = true;

        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);

        const user = await Donor.findByIdAndUpdate(userId, updatedUserData, {
            new: true,
        });

        const updatedUser = await user.save();

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Donor' });
    }
};

module.exports = {
    allDonors,
    newDonor,
    oneDonor,
    updateDonor,
    deleteDonor,
}; 