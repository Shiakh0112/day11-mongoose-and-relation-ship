const Organizer = require("../models/organizer");

exports.createOrganizer = async (req, res) => {
  try {
    const organizer = await Organizer.create(req.body);
    res.status(201).json(organizer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.status(200).json(organizers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrganizer = async (req, res) => {
  try {
    const organizer = await Organizer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(organizer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
