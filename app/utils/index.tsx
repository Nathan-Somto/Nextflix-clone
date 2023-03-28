export function truncate(overview:string, end:number){
   let words = overview.split(' ');
   return  words.length > 150 ?words.slice(0,150).join(' ') : words.slice(0,end).join(' ');
}
export function randNum(num :number){
 return Math.floor(Math.random() * num-1);
}