const express = require("express");
const router = express.Router();


const { ensureAuth, ensureGuest } = require("../middleware/auth");



const locationController = require("../controllers/coordinate");
router.get("/getdata", locationController.getData);

router.put("/:lon/:lad", locationController.coordinate);
module.exports = router;

router.delete("/:id", locationController.deleteCoordinate);
console.log('at router')