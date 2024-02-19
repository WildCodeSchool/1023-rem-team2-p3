const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
// const itemControllers = require("./controllers/itemControllers");
const eventControllers = require("./controllers/EventController");
const userControllers = require("./controllers/UserController");
const verifyToken = require("./services/auth");
const hashedPassword = require("./services/hashedPassword");

// Route to get a list of items
// router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);

// Route to get All Event
router.get("/events", eventControllers.getAllEvents);
// Route to get All Users
router.get("/users", userControllers.getAllUsers);

/* ************************************************************************* */
// Route to get a specific Event by ID
router.get("/events/:id", eventControllers.getEventById);

/* ************************************************************************* */

// Route to create a new Event
router.post("/events", eventControllers.createEvent);
// Route to login User
router.post("/login", userControllers.getUserByEmail);

/* ************************************************************************* */

// Route to update an Event
router.put("/events/:id", eventControllers.updateEvents);

/* ************************************************************************* */

// Route to delete an Event
router.delete("/events/:id", eventControllers.deleteEvent);

/* ************************************************************************* */

//* *** SPECIFIC ROUTES FOR USER ****

// Route to get User when login
router.get("/me", verifyToken, userControllers.getUserById);

// Route to create a new User with hashedPassword
router.post("/users", hashedPassword, userControllers.addUser);

// ROUTES FOR USER TO REINITIALIZE PASSWORD
router.post("/reset-password", userControllers.createPasswordResetToken);
router.put("/reset-password", userControllers.resetPassword);

module.exports = router;
