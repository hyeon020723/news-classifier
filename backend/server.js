require('dotenv').config();

const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/category');
const clippedNewsRoutes = require('./routes/clippedNewsRoutes');
const newsByCategoryRouter = require('./routes/newsByCategory');
const newsByDateCategoryRouter = require('./routes/newsByDateCategory');
const uploadRoutes = require('./routes/upload');
const summarizeNewsRoute = require('./routes/summarizeNews');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/category', newsRoutes);
app.use('/api/clipped-news', clippedNewsRoutes);
app.use('/api/news/category', newsByCategoryRouter);
app.use('/api/news/date-category', newsByDateCategoryRouter);
app.use('/api/upload', uploadRoutes);
app.use('/api/summarizeNews', summarizeNewsRoute);

app.listen(3000, () => {
    console.log("http://localhost:3000");
});