const express = require("express");
const router = express.Router();

const tournoisCtrl = require("../controllers/tournois");

router.post("/list", tournoisCtrl.getAll);

module.exports = router;
