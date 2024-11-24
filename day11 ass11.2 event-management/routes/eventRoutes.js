const express = require("express");
const {
  createEvent,
  getEvents,
  updateEvent,
} = require("../controllers/eventController");

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.put("/:id", updateEvent);

module.exports = router;
