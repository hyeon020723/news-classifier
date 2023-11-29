const express = require('express');
const router = express.Router();
const { getNewsByDateAndCategory } = require('../models/newsModel');

// 특정 기간 및 카테고리에 해당하는 뉴스를 가져오는 라우트
router.get('/', async (req, res) => {
    try {
        const { startDate, endDate, categoryId } = req.query;
        const news = await getNewsByDateAndCategory(startDate, endDate, categoryId);
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;