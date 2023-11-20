const express = require("express");
const router = express.Router();
const {
  getAllClippedNews,
  getSpecificClippedNews,
} = require("../models/newsModel");

router.get("/", async (req, res) => {
  try {
    const clippedNews = await getAllClippedNews();
    res.json(clippedNews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/specific", async (req, res) => {
  try {
    const specificClippedNews = await getSpecificClippedNews(); // 새로운 모델 함수로 변경
    res.json(specificClippedNews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// category_id 에 맞춰서 데베에서 끌고오는 라우터
router.get("/category/:category_id", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    // Get news by category ID from the database
    const news = await getNewsByCategoryId(categoryId);

    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

let userSettings = {};

// Endpoint for submitting user settings
router.post("/submit-settings", async (req, res) => {
  try {
    // Get user settings from the request body
    const { startDate, endDate, newsCount, selectedCategories } = req.body;

    // Store user settings in the in-memory object
    userSettings = {
      startDate,
      endDate,
      newsCount,
      selectedCategories,
    };

    // Successful response
    res.json({
      success: true,
      message: "User settings have been successfully stored.",
    });
  } catch (err) {
    // Error response
    res.status(500).json({ error: err.message });
  }
});

// 선택한 기사 요약보기 버튼 누르면 api로 Post
router.post("/summarize-selected-articles", (req, res) => {
  try {
    // Get selected articles
    const selectedArticles = req.body.selectedArticles;

    // Prepare data array for multiple articles
    const articlesData = (selectedArticles || []).map((article) => ({
      title: article.title,
      url: article.url,
    }));

    // Successful response
    res.json({ success: true, articles: articlesData });
  } catch (err) {
    // Error response
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
