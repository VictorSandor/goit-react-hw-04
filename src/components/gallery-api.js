import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const fetchGalleryWithTopic = async (
  searchImages,
  KEY,
  currentPageUrl
) => {
  const response = axios.get(
    `/photos?per_page=30&page=${currentPageUrl}&query=${searchImages}&client_id=${KEY}`
  );
  return (await response).data.results;
};
