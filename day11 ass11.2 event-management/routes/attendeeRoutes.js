const express = require("express");
const {
  createAttendee,
  getAttendees,
} = require("../controllers/attendeeController");

const router = express.Router();

router.post("/", createAttendee);
router.get("/", getAttendees);

module.exports = router;
