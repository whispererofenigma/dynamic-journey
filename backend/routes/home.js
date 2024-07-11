// backend/routes/home.js
const express = require('express');
const router = express.Router();

// GET /api/home
router.get('/', (req, res) => {
  res.send('Welcome to my Portfolio Homepage');
});

module.exports = router;
