require('dotenv').config();

/**
 * Validate required environment variables
 */
function validateConfig() {
  const required = ['API_URL'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error(`Missing required environment variables: ${missing.join(', ')}`);
    process.exit(1);
  }
}

// Run validation on startup
validateConfig();

/**
 * Centralized configuration object
 */
const config = {
  apiUrl: process.env.API_URL,
  port: parseInt(process.env.PORT) || 3000,
  topN: parseInt(process.env.TOP_N) || 10,
  nodeEnv: process.env.NODE_ENV || 'development'
};

module.exports = config;
