export const fetchStory = async () => {
  try {
    const response = await fetch('https://restcountries.eu/rest/v2/name/eesti');
    const story = await response.json();
    return { success: true, body: story };
  } catch (error) {
    console.log(error);
    return { success: false };
  } finally {
    console.log('request fetched');
  }
};
