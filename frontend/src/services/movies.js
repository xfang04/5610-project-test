import axios from "axios";

class MovieDataService {
  get(id) {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/id/${id}`
    );
  }

  getAll(page = 0) {
    console.log(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/movies?page=${page}`
    );
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/movies?page=${page}`
    );
  }
  find(query, by = "title", page = 0) {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/movies?${by}=${query}&page=${page}`
    );
  }

  getRating() {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/ratings`
    );
  }

  createReview(data) {
    return axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/review`,
      data
    );
  }

  updateReview(data) {
    return axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/review`,
      data
    );
  }

  deleteReview(data) {
    return axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/review`,
      { data: data }
    );
  }
}

/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new MovieDataService();
