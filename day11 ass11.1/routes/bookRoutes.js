const express = require("express");
const {
  createBook,
  getBooksByAuthor,
} = require("../controllers/bookController");
const router = express.Router();

router.post("/", createBook);
router.get("/:authorId", getBooksByAuthor);

module.exports = router;
