const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
    const { title, url } = req.body;

    try {
        const response = await axios.post('http://your-server.com/api/v1/articles/summarize', { title, url });
        res.json({ summary: response.data.summary });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 