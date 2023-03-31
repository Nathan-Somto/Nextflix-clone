import Banner from "@/app/components/Banner";
import Row from "@/app/components/Row";
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

export async function getTrending() {
  const res = await fetch(requests.fetchTrending, { cache: "no-store" });
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
  const trendingNowData = getTrending();
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
    trendingNow,
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
    trendingNowData,
    topRatedData,
    animationMoviesData,
    actionMoviesData,
    comedyMoviesData,
    horrorMoviesData,
    romanceMoviesData,
    documentariesData,
    dramaMoviesData,
  ]);
const index = randNum(netflixOriginals.results.length);
  return (
    <>
     <Banner data={netflixOriginals.results} index={index}/>
    <main className="mt-[-5%]">
      <Row
        title={"Netflix Originals"}
        data={netflixOriginals.results}
        isLargeRow={true}
      />
      <Row 
        title={"Trending"} 
        data={trendingNow.results} 
        isLargeRow={false} />
      <Row 
        title={"Top rated"} 
        data={topRated.results} 
        isLargeRow={false} 
      />
      <Row
        title={"Animated Movies"}
        data={animationMovies.results}
        isLargeRow={false}
      />
      <Row
        title={"Action Movies"}
        data={actionMovies.results}
        isLargeRow={false}
      />
      <Row
        title={"Comedy Movies"}
        data={comedyMovies.results}
        isLargeRow={false}
      />
      <Row
        title={"Horror movies"}
        data={horrorMovies.results}
        isLargeRow={false}
      />
      <Row
        title={"Romance Movies"}
        data={romanceMovies.results}
        isLargeRow={false}
      />
      <Row
        title={"Documentaries"}
        data={documentaries.results}
        isLargeRow={false}
      />
      <Row
        title={"Drama Movies"}
        data={dramaMovies.results}
        isLargeRow={false}
      />
    </main>
    </>
  );
}

export default Browse;
