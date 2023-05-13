import axios from 'axios';

// 'https://api.pexels.com/v1/search?query=nature&per_page=1';

const API_KEY = '563492ad6f91700001000001639cabac73c74accb94b7bf7858095a0';
axios.defaults.baseURL = 'https://api.pexels.com/v1';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const response = await axios.get(`/search?query=${query}&page=${page}`);
  console.log(response.data);
  return response.data;

  // console.log('test');
};
