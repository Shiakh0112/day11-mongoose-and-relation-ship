const Registration = require("../models/registration");

exports.register = async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.cancelRegistration = async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Registration canceled" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
