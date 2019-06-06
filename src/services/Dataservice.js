import Axios from 'axios';

const axiosClient = Axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function(config) {
    const configWithApiKey = {
      ...config,
      params: {
        ...config.params,
        api_key: process.env.REACT_APP_API_KEY
      }
    };
    return configWithApiKey;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const searchMovies = async query => {
  try {
    if (!query) {
      const response = await axiosClient.get('/trending/movie/week');
      const { data: { results } } = response;
      return results;
    }

    const response = await axiosClient.get('/search/movie', {
      params: {
        query
      }
    });
    const { data: { results } } = response;
    return results;
  } catch (error) {
    console.log({ error });
    return [];
  }
};

export const getMovie = async (id) => {
  try {
    const response = await axiosClient.get(`/movie/${id}`)
    const { data } = response;
    return data;
  } catch (error) {
    console.log({ error });
    return {};
  }
}
