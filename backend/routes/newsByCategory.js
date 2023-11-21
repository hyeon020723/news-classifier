const express = require('express');
const router = express.Router();
const { getNewsByCategoryId } = require('../models/newsModel');

// 특정 카테고리 ID에 해당하는 뉴스 가져오는 라우트
router.get('/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const news = await getNewsByCategoryId(categoryId);
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
