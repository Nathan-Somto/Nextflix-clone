import Banner from "@/app/components/Banner";
import Row from "@/app/components/Row";
import TrailerModal from "@/app/components/TrailerModal";
import { requests } from "@/app/providers/requests";
import { Rows } from "@/app/types";
import { randNum } from "@/app/utils";
import React from "react";
export async function getNetflixOriginals() {
  const res = await fetch(requests.fetchNetflixOriginals, {
    cache: "no-store",
  });
  const data = res.json();
  return data;
}

export async function getTrendingMovie() {
  const res = await fetch(requests.fetchTrendingMovie, { cache: "no-store" });
  return res.json();
}
export async function getTrendingTv() {
  const res = await fetch(requests.fetchTrendingTv, { cache: "no-store" });
  return res.json();
}
export async function getMystery() {
  const res = await fetch(requests.fetchMystery, { cache: "no-store" });
  return res.json();
}
export async function getTopRated() {
  const res = await fetch(requests.fetchTopRated, { cache: "no-store" });
  return res.json();
}
export async function getAnimationMovies() {
  const res = await fetch(requests.fetchAnimationMovies, { cache: "no-store" });
  return res.json();
}
export async function getActionMovies() {
  const res = await fetch(requests.fetchAnimationMovies, { cache: "no-store" });
  return res.json();
}
export async function getComedyMovies() {
  const res = await fetch(requests.fetchComedyMovies, { cache: "no-store" });
  return res.json();
}
export async function getHorrorMovies() {
  const res = await fetch(requests.fetchHorrorMovies, { cache: "no-store" });
  return res.json();
}
export async function getRomanceMovies() {
  const res = await fetch(requests.fetchRomanceMovies, { cache: "no-store" });
  return res.json();
}
export async function getDocumentaries() {
  const res = await fetch(requests.fetchDocumentaries, { cache: "no-store" });
  return res.json();
}
export async function getDramaMovies() {
  const res = await fetch(requests.fetchDramaMovies, { cache: "no-store" });
  return res.json();
}

async function Browse() {
  const netflixOriginalsData = getNetflixOriginals();
  const trendingMovieData = getTrendingMovie();
  const trendingTvData =getTrendingTv();
  const mysteryMoviesData = getMystery();
  const topRatedData = getTopRated();
  const animationMoviesData = getAnimationMovies();
  const actionMoviesData = getActionMovies();
  const comedyMoviesData = getComedyMovies();
  const horrorMoviesData = getHorrorMovies();
  const romanceMoviesData = getRomanceMovies();
  const documentariesData = getDocumentaries();
  const dramaMoviesData = getDramaMovies();
  const [
    netflixOriginals,
    trendingMovie,
    trendingTv,
    mysteryMovies,
    topRated,
    animationMovies,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    dramaMovies,
  ]: Rows = await Promise.all([
    netflixOriginalsData,
    trendingMovieData,
    trendingTvData,
    mysteryMoviesData,
    topRatedData,
    animationMoviesData,
    actionMoviesData,
    comedyMoviesData,
    horrorMoviesData,
    romanceMoviesData,
    documentariesData,
    dramaMoviesData,
  ]);

  return (
    <>
     <Banner data={netflixOriginals.results} />
    <main className="mt-[-5%]">
    
      <Row 
        title={"Trending Movies"} 
        media_type={'movie'}
        data={trendingMovie.results} 
        isLargeRow={false} />
         <Row 
        title={"Trending Series"}
        media_type={'movie'} 
        data={trendingTv.results} 
        isLargeRow={false} />
      <Row 
        title={"Top rated"} 
        media_type={'movie'}
        data={topRated.results} 
        isLargeRow={false} 
      />

      <Row
        title={"Animated Movies"}
        media_type={'movie'}
        data={animationMovies.results}
        isLargeRow={false}
      />
        <Row
        title={"Netflix Originals"}
        media_type={'tv'}
        data={netflixOriginals.results}
        isLargeRow={true}
      />
      <Row
        title={"Action Movies"}
        media_type={'movie'}
        data={actionMovies.results}
        isLargeRow={false}
      />
      <Row
        title={"Comedy Movies"}
        media_type={'movie'}
        data={comedyMovies.results}
        isLargeRow={false}
      />
       <Row 
        title={"Mystery Movies"}
        media_type={'movie'} 
        data={mysteryMovies.results} 
        isLargeRow={false} />
      <Row
        title={"Horror movies"}
        media_type={'movie'}
        data={horrorMovies.results}
        isLargeRow={false}
      />
      <Row
        title={"Romance Movies"}
        media_type={'movie'}
        data={romanceMovies.results}
        isLargeRow={false}
      />
      <Row
        title={"Documentaries"}
        media_type={'movie'}
        data={documentaries.results}
        isLargeRow={false}
      />
      <Row
        title={"Drama Movies"}
        media_type={'movie'}
        data={dramaMovies.results}
        isLargeRow={false}
      />
    </main>
    <TrailerModal/>
    </>
  );
}

export default Browse;
