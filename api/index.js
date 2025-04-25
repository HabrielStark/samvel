// Serverless API entry point for Vercel
const app = require('../server/index');

// Для Vercel Serverless Function нужен обработчик запросов в формате (req, res)
module.exports = (req, res) => {
  // Vercel rewrites /api/v1/... to /api/v1/..., не нужно менять путь!
  return app(req, res);
}; 