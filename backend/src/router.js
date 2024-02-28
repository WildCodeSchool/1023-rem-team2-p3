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

// --------------------ROUTES FOR USER--------------------//
//* *** SPECIFIC ROUTES FOR USER AUTH****
// Route to create a new User with hashedPassword
router.post("/users", hashedPassword, userControllers.addUser);
// Route to login User
router.post("/login", userControllers.getUserByEmail);
// Route to update User without password
router.put("/users", verifyToken, userControllers.updateUserWithoutPassword);
// Route to update user password
router.put(
  "/users/password",
  verifyToken,
  hashedPassword,
  userControllers.updatePassword
);
// ROUTES FOR USER TO REINITIALIZE PASSWORD
router.post(
  "/reset-password",
  verifyToken,
  userControllers.createPasswordResetToken
);
router.put("/reset-password", verifyToken, userControllers.resetPassword);

// Route to get User when login
router.get("/me", verifyToken, userControllers.getUserById);

/// /////////////////////////////////////
// router.post("/logout", userControllers.logout); Pas necessaire pour le moment , juste suppression du token dans le localStorage et redirection vers la page de login
/// /////////////////////////////////////

//* ************************//
// (specific ADMIN OR SUPERADMIN)
// Route to get All Users
router.get("/users", verifyToken, userControllers.getAllUsers);
// Route to delete User
router.delete("/users", verifyToken, userControllers.deleteUser);
// Route to set User as Admin
router.put("/users/admin", verifyToken, userControllers.setUserAdmin);
// Route to set User as not Admin
router.put("/users/notadmin", verifyToken, userControllers.setUserNotAdmin);
// Route to desactivate User
// router.put("/users/desactivate", userControllers.desactivateUser);
// Route to activate User
// router.put("/users/activate", userControllers.activateUser);
// * ************************//

// --------------------ROUTES FOR EVENT--------------------//

// Route to get All Event
router.get("/events", eventControllers.getAllEvents);
// Route to get a specific Event by ID
router.get("/events/:id", eventControllers.getEventById);

//* ************************//
// (specific ADMIN OR SUPERADMIN)
// Route to create a new Event
router.post("/events", verifyToken, eventControllers.createEvent);
// Route to update an Event
router.put("/events/:id", verifyToken, eventControllers.updateEvents);
// Route to desactivate an Event
// DEMANDER A YOUSSEF//
router.put("/events/desactivate", eventControllers.desactivatedEvents); // "error": "Unknown column 'NaN' in 'where clause'"
// Route to delete an Event
// router.delete("/events/:id", eventControllers.deleteEvent);
//* ************************//

// --------------------ROUTES FOR STOCK_EVENT--------------------//

//* ************************//
// (specific ADMIN OR SUPERADMIN)
// Route to get All Inscriptions for an Event
router.get("/stockEvent", verifyToken, stockEventController.getAllStockEvents);
//* ************************//
// (specific USER)
// Route to create a new Inscription for an Event
router.post("/stockEvent", verifyToken, stockEventController.createStockEvent);
// Route to check if a user is already inscribed for an Event
router.post(
  "/stockEvent/check",
  verifyToken,
  stockEventController.checkUserEventById
);

// --------------------ROUTES FOR USERINFOS--------------------//
//* ************************//
// (specific ADMIN OR SUPERADMIN)
// Route to get all user infos
router.get("/user/info", verifyToken, userInfoController.browse);
//* ************************//
// (specific USER)
// Route to get a specific user info by ID
router.get("/user/informations", verifyToken, userInfoController.read);
// Route to add a new user info
router.post("/user/info", verifyToken, upload, userInfoController.add);
// Route to update a user info
router.put("/user/info", verifyToken, upload, userInfoController.edit);

// --------------------ROUTES FOR PRODUCT--------------------//
//* ************************//
// (specific USER)
// Route pour récupérer tous les produits
router.get("/products", productController.browse);

// Route pour récupérer un produit par son ID
router.get("/products/:id", productController.read);
//* ************************//
// (specific ADMIN OR SUPERADMIN)
// Route pour ajouter un nouveau produit
router.post("/products", verifyToken, upload, productController.add);
// Route pour mettre à jour un produit existant
router.put("/products/:id", verifyToken, upload, productController.edit);
// Route pour supprimer un produit
router.delete("/products/:id", verifyToken, productController.remove);

// --------------------ROUTES FOR NOTE--------------------//

// (specific ADMIN OR SUPERADMIN)
// Route pour récuperer toutes les notes
router.get(`/note`, verifyToken, noteController.getNote);
// Route pour ajouter des notes
router.post(`/note`, verifyToken, noteController.addNote);
// Route pour modifier les notes
router.put(`/note/:id`, verifyToken, noteController.updateNote);
// Route pour supprimer les notes
router.delete(`/note/:id`, verifyToken, noteController.deleteNote);
// (specific USER )
// Route pour récupérer les notes par user_id
router.get(`/mynote`, verifyToken, noteController.getNoteById);

// --------------------ROUTES FOR SCORE_CARD--------------------//

// (specific ADMIN OR SUPERADMIN)
// Route pour récupérer toutes les scores_card
router.get(`/score_card`, verifyToken, scoreCardController.getScoreCard);
// Route pour ajouter des images pour les scores_card
router.post(
  `/score_card`,
  verifyToken,
  upload,
  scoreCardController.addScoreCard
);
// Route pour supprimer les scores_card
router.delete(
  `/score_card/:id`,
  verifyToken,
  scoreCardController.deleteScoreCard
);
// (specific USER )
// Route pour récupérer les scores_card par user_id
router.get(`/myscore_card`, verifyToken, scoreCardController.getScoreCardById);

// router.put(
//   `/score_card/:id`,
//   verifyToken,
//   scoreCardController.updateScoreCardById
// );

// --------------------ROUTES FOR privilege-------------------//

// (specific ADMIN OR SUPERADMIN)
// Route pour récupérer tous les privilèges
router.get(`/privilege`, verifyToken, privilegeController.getPrivilege);
// Route pour récupérer le privilège
// router.get(`/privilege/:id`, verifyToken, privilegeController.getPrivilegeById);

// (specific USER )
// Route pour ajouter des privilèges
router.post(`/privilege`, verifyToken, privilegeController.addPrivilege);

// Route pour modifier les privilèges
// router.put(`/privilege/:id`, verifyToken, privilegeController.updatePrivilege);
// Route pour supprimer les privilèges
// router.delete(
//   `/privilege/:id`,
//   verifyToken,
//   privilegeController.deletePrivilege
// );

// Route to get a specific item by ID
// Route to add a new item
// Route to update an existing item
// Route to delete an existing item

/* ************************************************************************* */

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
router.get("/order", orderController.getOrder);
router.post("/order", orderController.addOrders);

module.exports = router;
