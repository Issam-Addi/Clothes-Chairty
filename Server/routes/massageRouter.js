const express = require("express");
const router = express.Router();
const messageData = require("../models/massageDataModel");

router.post("/message", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new messageData({
            name: name,
            email: email,
            message: message,
        });

        const add = await newMessage.save();

        res.json(add);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get("/message", async (req, res) => {

    messageData.find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            errorHandler(error, req, res);
        });
});

module.exports = router;