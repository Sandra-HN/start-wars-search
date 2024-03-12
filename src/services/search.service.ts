const fetchCharacters = async (
  search: string,
  retryCount = 0
): // eslint-disable-next-line @typescript-eslint/no-explicit-any
Promise<any> => {
  try {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    const response = await fetch(`${apiBaseUrl}people/?search=${search}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (retryCount < 3) {
      // Try up to 3 times
      console.log(`Retry #${retryCount + 1} after error:`, error);
      await new Promise((r) => setTimeout(r, 2 ** retryCount * 1000)); // Exponential back-off
      return fetchCharacters(search, retryCount + 1);
    } else {
      throw new Error("Failed to fetch after retries: " + error.message);
    }
  }
};
export default fetchCharacters;
