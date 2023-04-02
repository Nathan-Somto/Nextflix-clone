import genres from "../data/genres";
import { IGenres, genresObj, media_type } from "../types";
export function truncate(overview:string, end:number){
   if(!overview) return '';
   let words = overview.split(' ');
   return  words.length > 150 ?words.slice(0,150).join(' ') : words.slice(0,end).join(' ');
}
export function randNum(num :number){
 return Math.floor(Math.random() * (num-1));
}
export function findGenres(genreIds:number[],media_type:media_type) : string[]
{
   let names:string[] =[];
    genres[media_type].filter((item,index)=>{
      if(genreIds.indexOf(item.id)!== -1)  names.push(item.name);
   });
   return names;
}
export function findGenre(id:string, media_type:media_type):string{
let genre =genres[media_type].find((genre,index)=> genre.id === +id)
if(!genre) return '';
return genre.name;

}