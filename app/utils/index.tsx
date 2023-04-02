import { IGenres } from "../types";

export function truncate(overview:string, end:number){
   if(!overview) return '';
   let words = overview.split(' ');
   return  words.length > 150 ?words.slice(0,150).join(' ') : words.slice(0,end).join(' ');
}
export function randNum(num :number){
 return Math.floor(Math.random() * (num-1));
}
export function findGenres(genres:{genres:IGenres[]},genreIds:number[]) : string[]
{
   let names:string[] =[];
    genres.genres.filter((item,index)=>{
      if(genreIds.indexOf(item.id)!== -1)  names.push(item.name);
   });
   return names;
   
}