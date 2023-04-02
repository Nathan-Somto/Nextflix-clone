import { API_KEY ,BASE_URL} from "./common";
export const requests={
    fetchTrendingMovie: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    fetchTrendingTv:`${BASE_URL}/trending/tv/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAnimationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchDramaMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMystery:`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648`
}