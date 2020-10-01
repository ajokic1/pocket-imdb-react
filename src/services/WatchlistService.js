import ApiService from "./ApiService";

const ENDPOINTS = {
  WATCHLIST: "/api/watchlist",
  ADD: "/api/watchlist/add/:id",
  REMOVE: "/api/watchlist/remove/:id",
  WATCHED: "/api/watchlist/watched/:id/:watched",
};

class WatchlistService extends ApiService {
  get = () => {
    return this.apiClient.get(ENDPOINTS.WATCHLIST);
  };

  add = (id) => {
    return this.apiClient.post(ENDPOINTS.ADD.replace(":id", id));
  };

  remove = (id) => {
    return this.apiClient.post(ENDPOINTS.REMOVE.replace(":id", id));
  };

  setWatched = (id, watched) => {
    return this.apiClient.post(
      ENDPOINTS.WATCHED.replace(":id", id).replace(":watched", watched ? 1 : 0)
    );
  };
}

export const watchlistService = new WatchlistService();
