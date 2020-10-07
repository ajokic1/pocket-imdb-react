import { debounce } from "lodash";
import config from "../config";
import ApiService from "./ApiService";

const ENDPOINTS = {
  OMDB: "http://www.omdbapi.com/?",
};

const debouncedSearch = debounce((search, callback) => {
  (async () => {
    const response = await fetch(
      ENDPOINTS.OMDB +
        new URLSearchParams({
          apikey: config.OMDB_KEY,
          type: "movie",
          s: search,
        })
    );
    const movies = await response.json();
    if (!movies.Search) callback([]);
    else {
      callback(
        movies.Search.map((movie) => ({
          value: movie.Title,
          label: movie.Title,
        }))
      );
    }
  })();
}, 1000);

class OmdbService extends ApiService {
  searchMovies = (search, callback) => {
    debouncedSearch(search, callback);
  };

  getMovie = async (title) => {
    const response = await fetch(
      ENDPOINTS.OMDB +
        new URLSearchParams({
          apikey: config.OMDB_KEY,
          type: "movie",
          t: title,
          plot: "full",
        })
    );
    return await response.json();
  };
}

export const omdbService = new OmdbService();
