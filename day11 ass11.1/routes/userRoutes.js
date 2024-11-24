const express = require("express");
const { createUser, getUserBorrowedBooks } = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);
router.get("/:userId", getUserBorrowedBooks);

module.exports = router;
