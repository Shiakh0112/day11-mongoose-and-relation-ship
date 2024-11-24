const Attendee = require("../models/attendee");

exports.createAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.create(req.body);
    res.status(201).json(attendee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find();
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
