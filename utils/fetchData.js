/**
 * Fetch data from URL with retry logic for 5xx errors
 * @param {string} url - Target URL
 * @param {number} maxRetries - Max retry attempts (default: 3)
 * @param {number} retryDelay - Delay between retries in ms (default: 1000)
 * @returns {Promise<any>} Response data
 */
async function fetchData(url, maxRetries = 3, retryDelay = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'FirstPR-Backend/1.0'
        }
      });
      
      // Check if response is ok (status 200-299)
      if (!response.ok) {
        const is5xxError = response.status >= 500 && response.status < 600;
        
        if (is5xxError && attempt < maxRetries) {
          console.error(`[Retry ${attempt}/${maxRetries}] 5xx error from ${url}: ${response.status} - Retrying in ${retryDelay}ms`);
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          continue;
        }
        
        // Throw on non-2xx
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data;
      
    } catch (error) {
      lastError = error;
      
      // Log final error
      console.error(`[fetchData] Failed to fetch ${url}:`, {
        message: error.message,
        attempt: attempt
      });
      
      // If not last attempt and it's a 5xx, already logged above
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
  
  throw lastError;
}

module.exports = { fetchData };
