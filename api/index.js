// Serverless API entry point for Vercel
const app = require('../server/index');

// Для Vercel Serverless Function нужен обработчик запросов в формате (req, res)
module.exports = (req, res) => {
  // Strip the /api prefix before passing to Express
  if (req.url.startsWith('/api/')) {
    req.url = req.url.replace('/api', '');
  }
  
  // Pass to Express application
  return app(req, res);
}; 