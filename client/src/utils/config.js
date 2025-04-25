// API URL configuration for different environments
const config = {
  apiUrl: process.env.NODE_ENV === 'production' 
    ? 'https://samvel-r22r.vercel.app/api/v1' 
    : 'http://localhost:5000/api/v1'
};

export default config; 