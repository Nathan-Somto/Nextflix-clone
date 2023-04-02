
import genres from '@/app/data/genres';
import { requests } from '@/app/providers/requests';
import { IMovie, ITvOriginals, media_type } from '@/app/types';
import FilterGenres from '@/app/components/FilterGenres';
import Grid from '@/app/components/Grid';
import React from 'react';
import { findGenre } from '@/app/utils';
export async function generateStaticParams({params:{media_type}}:{params:{media_type:media_type}}) {
/*
 * next js does not know how many static pages to build
* through this function i am telling next how many pages to build for the genre/[slug] route
 */
 
  return genres[media_type].map((genre) => ({
    id: genre.id,
  }));
}
export async function getGenre(media_type:string,id:string){
  let request = media_type === 'tv' ? requests.fetchTvGenre : requests.fetchMovieGenre;
const res = await fetch(request+id,{next:{revalidate:60}});
const data:{results:IMovie[]} | {results:ITvOriginals[]} = await res.json();
return data;
}
async function Genre({params:{media_type,id}}:{params:{media_type:media_type,id:string}}) {
  const Genre = await getGenre(media_type,id);
  return (
   <main>
   <FilterGenres
    media_type={media_type}
    />
    <section>
      <h2>{findGenre(id,media_type)}</h2>
      <Grid
      data={Genre.results}

      />
    </section>
   </main>
  )
}

export default Genre