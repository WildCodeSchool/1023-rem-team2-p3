const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const discountController = require("./controllers/discountController");
const userDiscountController = require("./controllers/userDiscountController");
// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

router.get("/discount", discountController.getDiscount);
router.post("/discount", discountController.addDiscount);
router.put("/discount/:id", discountController.updateDiscount);
// router.delete("/discount/:id", discountController.deleteDiscount);

router.get("/userDiscount", userDiscountController.getUserDiscount);
router.post("/userDiscount", userDiscountController.addUserDiscount);

module.exports = router;
