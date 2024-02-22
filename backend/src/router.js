const express = require("express");
const router = express.Router();
const userInfoController = require("./controllers/userInfoController");
const upload = require("./services/upload");

router.get("/user/info", userInfoController.browse); // USER_INFO

router.get("/user/info/:id", userInfoController.read); // USER_INFO

router.post("/user/info", upload, userInfoController.add); // USER_INFO

router.put("/user/info/:id", upload, userInfoController.edit); // USER_INFO

// router.delete('/user/info/:id', userInfoController.delete);  // USER_INFO

module.exports = router;
