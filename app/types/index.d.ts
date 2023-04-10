export interface IGenres{
    id:number;
    name:string;
}
export type media_type ='tv'| "movie";
export type title = "Netflix Originals" | "Action Movies" | "Trending Movies" |"Trending Series"|"Mystery Movies"|"Romance Movies" | "Trending" | "Top rated"| "Animated Movies"| "Comedy Movies"| "Documentaries"|"Horror movies" | "Drama Movies";
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
    title: string;
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
interface IVideo{
    iso_639_1:string;
    iso_3166_1:string;
    name:string;
    key:string;
    site:string;
    size:number;
    type:string;
    official:boolean;
    piblished_at:string;
    id:string;
}
export interface Video extends IMovie{
id:number;
first_air_date:string;
genres:IGenres[];
videos:{results:IVideo[]};
}
type resultTvOriginals = {results:ITvOriginals[]}
type resultMovie = {results:IMovie[]}
export type Rows = [ 
    netflixOriginals:resultTvOriginals,
    trendingMovie:resultMovie,
    trendingTv:resultMovie,
    trendingMystery:resultMovie,
    topRated:resultMovie,
    animationMovies:resultMovie,
    actionMovies:resultMovie,
    comedyMovies:resultMovie,
    horrorMovies:resultMovie,
    romanceMovies:resultMovie,
    documentaries:resultMovie,
    dramaMovies:resultMovie,
]
interface Imedia_type {
    tv:string;
    movie:string;
}
type genres<Type> = {
    [Property in keyof Type]: IGenres[];
  };
 export type genresObj = genres<Imedia_type>
 /*
  * user data interface 
  */
  interface list extends IMovie , ITvOriginals{
  }
  type urlString =  '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  type provider = 'google' | "local";
  type profile ={
    photoUrl:urlString;
    username:string;
    my_list?: list[]
  }
 export interface IUser{
    uid:string;
    email:string;
    provider:provider;
    firstname:string;
    profile:profile[];
  }