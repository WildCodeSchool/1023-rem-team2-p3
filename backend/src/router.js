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

// const itemControllers = require("./controllers/itemControllers");
const eventControllers = require("./controllers/EventController");
// Route to get a list of items
// router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);

// Route to get All Event
router.get("/events", eventControllers.getAllEvents);
// Route to get a specific Event by ID
router.get("/events/:id", eventControllers.getEventById);

// Route to create a new Event
router.post("/events", eventControllers.createEvent);

// Route to update an Event
router.put("/events/:id", eventControllers.updateEvents);

// Route to delete an Event
router.delete("/events/:id", eventControllers.deleteEvent);


/* ************************************************************************* */

module.exports = router;
