const express = require("express");
const {
  register,
  cancelRegistration,
} = require("../controllers/registrationController");

const router = express.Router();

router.post("/", register);
router.delete("/:id", cancelRegistration);

module.exports = router;
