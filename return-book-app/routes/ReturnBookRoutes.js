const express = require("express");
const { returnBook } = require("../Controller/ReturnBookController");

const router = express.Router();

router.post("/return", returnBook);

module.exports = router;
