const express = require("express");
const router = express.Router();
const upload = require("./services/upload");

const verifyToken = require("./services/auth");
const hashedPassword = require("./services/hashedPassword");

const discountController = require("./controllers/discountController");
const userDiscountController = require("./controllers/userDiscountController");
const noteController = require("./controllers/noteController");
const scoreCardController = require("./controllers/scoreCardController");
const privilegeController = require("./controllers/privilegeController");
const userInfoController = require("./controllers/userInfoController");
const stockEventController = require("./controllers/StockEventController");
const paymentController = require("./controllers/paymentController");
const orderController = require("./controllers/orderController");
const userControllers = require("./controllers/UserController");
const eventControllers = require("./controllers/EventController");
const productController = require("./controllers/productController");



// Route pour récupérer tous les produits
router.get("/products", productController.browse);

// Route pour récupérer un produit par son ID
router.get("/products/:id", productController.read);

// Route pour ajouter un nouveau produit
router.post("/products", upload, productController.add);

// Route pour mettre à jour un produit existant
router.put("/products/:id", upload, productController.edit);


// Route pour supprimer un produit
router.delete("/products/:id", productController.remove);



// Route to get a list of items
router.get(`/note`, noteController.getNote);
router.get(`/score_card`, scoreCardController.getScoreCard);
router.get(`/privilege`, privilegeController.getPrivilege);

// Route to get a specific item by ID
router.get(`/note/:id`, noteController.getNoteById);
router.get(`/score_card/:id`, scoreCardController.getScoreCardById);
router.get(`/privilege/:id`, privilegeController.getPrivilegeById);
// Route to add a new item
router.post(`/note`, noteController.addNote);
router.post(`/score_card`, scoreCardController.addScoreCard);
router.post(`/privilege`, privilegeController.addPrivilege);
// Route to update an existing item
router.put(`/note/:id`, noteController.updateNote);
router.put(`/score_card/:id`, scoreCardController.updateScoreCardById);
router.put(`/privilege/:id`, privilegeController.updatePrivilege);
// Route to delete an existing item
router.delete(`/note/:id`, noteController.deleteNote);
router.delete(`/score_card/:id`, scoreCardController.deleteScoreCard);
router.delete(`/privilege/:id`, privilegeController.deletePrivilege);



// Route to get All Inscriptions for an Event
router.get("/stockEvent", stockEventController.getAllStockEvents);
// Route to create a new Inscription for an Event
router.post("/stockEvent", stockEventController.createStockEvent);
// Route to check if a user is already inscribed for an Event
router.post("/stockEvent/check", stockEventController.checkUserEvent);


/* ************************************************************************* */

// Route to get All Event
router.get("/events", eventControllers.getAllEvents);

/* ************************************************************************* */
// Route to get a specific Event by ID
router.get("/events/:id", eventControllers.getEventById);

// router.delete('/user/info/:id', userInfoController.delete);  // USER_INFO

// Route to create a new Event
router.post("/events", eventControllers.createEvent);

/* ************************************************************************* */

// Route to update an Event
router.put("/events/:id", eventControllers.updateEvents);

/* ************************************************************************* */

// Route to delete an Event
router.delete("/events/:id", eventControllers.deleteEvent);

/* ************************************************************************* */

//* *** SPECIFIC ROUTES FOR USER ****
// Route to get All Users
router.get("/users", userControllers.getAllUsers);

// Route to create a new User with hashedPassword
router.post("/users", hashedPassword, userControllers.addUser);

// Route to update User
router.put("/users", verifyToken, userControllers.updateUser);

// Route to delete User
router.delete("/users", verifyToken, userControllers.deleteUser);

// Route to login and logout User
router.post("/login", userControllers.getUserByEmail);
router.post("/logout", userControllers.logout);
// Route to get User when login
router.get("/me", verifyToken, userControllers.getUserById);

// ROUTES FOR USER TO REINITIALIZE PASSWORD
router.post(
  "/reset-password",
  verifyToken,
  userControllers.createPasswordResetToken
);
router.put("/reset-password", verifyToken, userControllers.resetPassword);

router.get("/discount", discountController.getDiscount);
router.post("/discount", discountController.addDiscount);
router.put("/discount/:id", discountController.updateDiscount);
// router.delete("/discount/:id", discountController.deleteDiscount);

router.get("/userDiscount", userDiscountController.getUserDiscount);
router.post("/userDiscount", userDiscountController.addUserDiscount);



router.get("/payment", paymentController.getPayment);
router.post("/payment", paymentController.addPayment);
router.put("/payment/:bill_number", paymentController.updatePayment);
// router.delete("/payment/:id", paymentController.deletePayment);

router.get("/user/info", userInfoController.browse); // USER_INFO

router.get("/user/info/:id", userInfoController.read); // USER_INFO

router.post("/user/info", upload, userInfoController.add); // USER_INFO

router.put("/user/info/:id", upload, userInfoController.edit); // USER_INFO

router.get("/order", orderController.getOrder);
router.post("/order", orderController.addOrders);



module.exports = router;
