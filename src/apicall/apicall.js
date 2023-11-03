const API_URL = process.env.REACT_APP_API_URL;

export async function apiCall(endpoint) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error('API request failed: ' + error.message);
  }
}
