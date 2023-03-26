export interface IGenres{
    id:number;
    name:string;
}
export type title = "Netflix Originals" | "Action Movies" | "Romance Movies" | "Trending" | "Top rated"| "Animated Movies"| "Comedy Movies"| "Documentaries"|"Horror movies" | "Drama Movies";
export interface IMovie{
    adult:boolean;
    backdrop_path:string;
    genre_ids:number[];
    id:number;
    original_language:string;
    original_title:string;
    overview:string;
    poster_path:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
    popularity:number;
    name:string;

}
export interface ITvOriginals{
    backdrop_path:string;
    first_air_date:string;
    genre_ids:number[];
    name:string;
    original_name:string;
    overview:string;
    poster_path:string;
    vote_average:number;
    vote_count:number;
    id:number;
    origin_country:string[];
    original_language:string;

}
type resultTvOriginals = {results:ITvOriginals[]}
type resultMovie = {results:IMovie[]}
export type Rows = [ 
    netflixOriginals:resultTvOriginals,
    trendingNow:resultMovie,
    topRated:resultMovie,
    animationMovies:resultMovie,
    actionMovies:resultMovie,
    comedyMovies:resultMovie,
    horrorMovies:resultMovie,
    romanceMovies:resultMovie,
    documentaries:resultMovie,
    dramaMovies:resultMovie,
]