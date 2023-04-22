import genres from "../data/genres";
import { IGenres, genresObj, media_type } from "../types";
/**
 * @description set's the number of words in my overview to be at most 100 words.
 * @param {string} overview - the description of a particular movie
 * @param {number} end - the number of characters in the description
 * @returns returns at most 100 words in the overview
 */
export function truncate(overview:string, end:number){
   if(!overview) return '';
   let words = overview.split(' ');
   return  words.length > 150 ?words.slice(0,100).join(' ') : words.slice(0,end).join(' ')+'...';
}
/**
 * @description returns a random number from 0 to num-1. 
 * @param {number} num - the end range for the random number function 
 * @returns returns a random number
 */
export function randNum(num :number){
 return Math.floor(Math.random() * (num-1));
}
/**
 * 
 * @param {number[]} genreIds - an array of genreIds that are numbers.
 * @param media_type - a string that can either be tv or movie
 * @returns an array  of names that corresponds to genreIds
 */
export function findGenres(genreIds:number[],media_type:media_type) : string[]
{
   let names:string[] =[];
    genres[media_type].filter((item,index)=>{
      if(genreIds.indexOf(item.id)!== -1)  names.push(item.name);
   });
   return names;
}
/**
 * 
 * @param {number} id - the id for a particular genre. 
 * @param {media_type} media_type - a string that can either be tv or movie.
 * @returns the corresponding name of id.
 */
export function findGenre(id:string, media_type:media_type):string{
let genre =genres[media_type].find((genre,index)=> genre.id === +id)
if(!genre) return '';
return genre.name;

}