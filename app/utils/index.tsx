export function truncate(overview:string, end:number){
   return  overview.length> 150 ?overview.slice(0,150) : overview.slice(0, end);
}
export function randNum(num :number){
 return Math.floor(Math.random() * num-1);
}