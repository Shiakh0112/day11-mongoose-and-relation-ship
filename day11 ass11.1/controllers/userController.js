const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserBorrowedBooks = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate(
      "borrowed_books"
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
