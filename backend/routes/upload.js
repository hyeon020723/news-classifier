const express = require('express');
const { saveClippedNews } = require('../models/newsModel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body]; // 배열이 아닌 경우 배열로 변환
    await saveClippedNews(data);
    res.status(200).send('Data uploaded successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
