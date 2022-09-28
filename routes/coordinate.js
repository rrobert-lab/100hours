const express = require("express");
const router = express.Router();

const locationController = require("../controllers/coordinate");


const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/get/info", ensureAuth, locationController.getData);
router.put("/location/:lon/:lad", locationController.coordinate);
module.exports = router;