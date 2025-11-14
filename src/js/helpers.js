const TIMEOUT = 10000; // 10 seconds

// Fetch the API from the url
export const fetchWithTimeout = async (url, options = {}) => {
  // Create an abort if the request takes more than 10sec
  const controller = new AbortController();

  // After 10sec the controller.abort method well called which cancel the fetch
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    // The actual fetch from the url
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    // Clear the timeoutId after success
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') throw new Error('Request timeout');
    throw error;
  }
};

export const setLoading = (model, isLoading) => {
  model.state.loading = isLoading;
};

export const setError = (model, message) => {
  model.state.error = message;
};
