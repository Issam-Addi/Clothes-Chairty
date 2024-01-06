const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");


router.get("/all_order", orderController.allOrders);
router.get("/all_order_Not_active", orderController.allOrdersNotActive);
router.get("/one_order_by_Id/:id", orderController.oneOrderById);
router.post("/all_order_by_email", orderController.AllOrderByEmail);
router.post("/new_order", orderController.newOrder);
router.put("/order/:id", orderController.updateOrder);
router.delete("/order/:id", orderController.deleteOrder);

module.exports = router;