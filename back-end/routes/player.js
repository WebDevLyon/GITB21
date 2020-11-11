const express = require("express");
const router = express.Router();

const playerCtrl = require("../controllers/player");

router.post("/add", playerCtrl.add);
router.get("/list", playerCtrl.list);

//Route pour dev a sup en prod
//router.put("/adddb", playerCtrl.addBD);

module.exports = router;
