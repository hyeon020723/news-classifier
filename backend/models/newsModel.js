const pool = require('../db');

const getAllNewsCategories = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      const sql = `
        SELECT
          *
        FROM
          news_categories
      `;
      
      connection.query(sql, (err, results) => {
        connection.release(); 
        if (err) reject(err);
        resolve(results);
      });
    });
  });
};

//DB에서 모든 뉴스 기사를 가져옴
const getAllClippedNews = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      const sql = `
        SELECT
          * 
        FROM
          clipped_news
      `;

      connection.query(sql, (err, results) => {
        connection.release();
        if (err) reject(err);
        resolve(results);
      });
    });
  });
};

//  DB에서 특정 카테고리 ID에 해당하는 뉴스의 title, url, category, publication_date를 가져오는 함수
const getNewsByCategoryId = (categoryId) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      const sql = `
        SELECT
          title,
          url,
          category_id,
          publication_date
        FROM
          clipped_news
        WHERE
          category_id = ?
      `;

      connection.query(sql, [categoryId], (err, results) => {
        connection.release();
        if (err) reject(err);
        resolve(results);
      });
    });
  });
};

const getNewsByDateAndCategory = (startDate, endDate, categoryId) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      // 주어진 기간과, 주어진 category_id를 가진 뉴스의 title, url, category, publication_date를 가져오는 함수
      const sql = `
        SELECT
          title,
          url,
          category,
          publication_date
        FROM
          news
        WHERE
          publication_date BETWEEN ? AND ?
          AND category_id = ?
      `;

      connection.query(sql, [startDate, endDate, categoryId], (err, results) => {
        connection.release();
        if (err) reject(err);
        resolve(results);
      });
    });
  });
};

const saveClippedNews = (newsData) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      const { title, url, publication_date, category_id } = newsData;

      const sql = `
        INSERT INTO clipped_news (title, url, publication_date, category_id)
        VALUES (?, ?, ?, ?)
      `;

      const values = newsData.map(item => [item.title, item.url, item.publication_date, item.category_id]);

      connection.query(sql, [values], (err, results) => {
        connection.release();
        if (err) reject(err);
        else resolve(results);
      });
    });
  });
};


module.exports = { getAllNewsCategories, getAllClippedNews, getNewsByCategoryId, getNewsByDateAndCategory, saveClippedNews,getSpecificClippedNews };

