const express = require("express");
const {
  createOrganizer,
  getOrganizers,
  updateOrganizer,
} = require("../controllers/organizerController");

const router = express.Router();

router.post("/", createOrganizer);
router.get("/", getOrganizers);
router.put("/:id", updateOrganizer);

module.exports = router;
