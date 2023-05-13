import axios from 'axios';

// 'https://api.pexels.com/v1/search?query=nature&per_page=1';

const API_KEY = '563492ad6f91700001000001639cabac73c74accb94b7bf7858095a0';
axios.defaults.baseURL = 'https://api.pexels.com/v1';
axios.defaults.headers.common['Authorization'] = API_KEY;

export const getImages = async (query, page) => {
  const params = {
    query,
    page,
    orientation: 'landscape',
    per_page: 15,
    // api_key: API_KEY замість axios.defaults.headers в ДЗ
  };

  const response = await axios.get('/search', {
    params,
  });

  return response.data;
};
