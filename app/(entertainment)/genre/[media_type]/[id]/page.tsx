
import genres from '@/app/data/genres';
import { requests } from '@/app/providers/requests';
import { IMovie, ITvOriginals, media_type } from '@/app/types';
import FilterGenres from '@/app/components/FilterGenres';
import Grid from '@/app/components/Grid';
import React from 'react';
import { findGenre } from '@/app/utils';

export async function getGenre(media_type:string,id:string){
  let request = media_type === 'tv' ? requests.fetchTvGenre : requests.fetchMovieGenre;
const res = await fetch(request+id,{next:{revalidate:60}});
const data:{results:IMovie[]} | {results:ITvOriginals[]} = await res.json();
return data;
}
type props = {
params:{
  media_type:media_type,
  id:string
  }
}
async function Genre({params}:props) {
  const {media_type, id} = params;
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