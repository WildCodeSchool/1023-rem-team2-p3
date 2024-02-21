const express = require("express");

const router = express.Router();

router.use(express.json());
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const noteController = require("./controllers/noteController");
const scoreCardController = require("./controllers/scoreCardController");
const privilegeController = require("./controllers/privilegeController");

// Route to get a list of items
router.get(`/note`, noteController.getNote);
router.get(`/score_card`, scoreCardController.getScoreCard);
router.get(`/privelege`, privilegeController.getPrivilege);

// Route to get a specific item by ID
router.get(`/note/:id`, noteController.getNoteById);
router.get(`/score_card/:id`, scoreCardController.getScoreCardById);
router.get(`/privelege/:id`, privilegeController.getPrivilegeById);
// Route to add a new item
router.post(`/note`, noteController.addNote);
router.post(`/score_card`, scoreCardController.addScoreCard);
router.post(`/privelege`, privilegeController.addPrivilege);
// Route to update an existing item
router.put(`/note/:id`, noteController.updateNote);
router.put(`/score_card/:id`, scoreCardController.updateScoreCardById);
router.put(`/privelege/:id`, privilegeController.updatePrivilege);
// Route to delete an existing item
router.delete(`/note/:id`, noteController.deleteNote);
router.delete(`/score_card/:id`, scoreCardController.deleteScoreCard);
router.delete(`/privelege/:id`, privilegeController.deletePrivilege);

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
