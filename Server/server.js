const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const adminRouts = require('./routes/adminRouter');
const charityRouter = require('./routes/charityRouter');
const donorRouter = require('./routes/donorRouter');
const logInRouts = require('./routes/logInRouter');
const orderRouter = require('./routes/orderRouter');
const charityMovementsRouter = require('./routes/charityMovementsRouter');
const donorMovementsRouter = require('./routes/donorMovementsRouter');
const statisticsRouter = require('./routes/statisticsRouter');
const massageRouter = require('./routes/massageRouter');

const dbURI = "mongodb+srv://admin:admin@cluster0.ldqpwa2.mongodb.net/?retryWrites=true&w=majority";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API!"); 
});

app.use(adminRouts);
app.use(charityRouter);
app.use(donorRouter);
app.use(logInRouts);
app.use(orderRouter);
app.use(charityMovementsRouter);
app.use(donorMovementsRouter);
app.use(statisticsRouter);
app.use(massageRouter);



module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Starting server on port ${PORT}`);
        });
      });
  },
};
