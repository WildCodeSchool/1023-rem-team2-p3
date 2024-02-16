const express = require("express");

const router = express.Router();

router.use(express.json());
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const noteController = require("./controllers/noteController");

// Route to get a list of items
router.get(`/note`, noteController.getNote);

// Route to get a specific item by ID
router.get(`/note/:id`, noteController.getNoteById);

// Route to add a new item
router.post(`/note`, noteController.addNote);

// Route to update an existing item
router.put(`/note/:id`, noteController.updateNote);

/* ************************************************************************* */

module.exports = router;
