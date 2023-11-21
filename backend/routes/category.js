const express = require('express');
const router = express.Router();
const { getAllNewsCategories } = require('../models/newsModel');


router.get('/', async (req, res) => {
  try {
    const categories = await getAllNewsCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;