const controller = require("../controllers/usersController");
const express = require("express");
const router = express.Router();

router.get("/token/:name", controller.getByName);
router.get("/ambassadors", controller.getAmbassadorsList);
router.get("/ambassadors/animals", controller.getAnimalsAmbassadors);
router.get("/ambassadors/environment", controller.getEnvironmentAmbassadors);
router.get("/ambassadors/human", controller.getHumanAmbassadors);
router.get("/ambassadors/plants", controller.getPlantsAmbassadors);
router.post("/register", controller.postRegisterUser);
router.post("/login", controller.login);
router.patch("/update/token/:id", controller.updateProfileById);
router.delete("/delete/token/:id", controller.deleteById);

module.exports = router;