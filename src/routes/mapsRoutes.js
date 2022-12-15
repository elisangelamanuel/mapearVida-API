const controller = require("../controllers/mapsController");
const express = require("express");
const router = express.Router();

router.get("/points", controller.getPointsList);
router.post("/token/map", controller.postMapAPoint);
router.patch("/token/update/:id", controller.updatePointById);
router.delete("/token/delete/:id", controller.deleteById);

module.exports = router;