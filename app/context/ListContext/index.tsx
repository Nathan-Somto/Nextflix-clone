// import { IMovie, ITvOriginals, localProfile, media_type } from '@/app/types';
// import { useReducer, createContext, useContext, useEffect } from 'react';

// export const ListContext = createContext<ListContext| null>(null);
//  export function useList(){
// return  useContext(ListContext);
//  }
//  type List = {
//    addToList: (selectedItem:IMovie | ITvOriginals)=> Promise<void>;
//   };
//   function reducer (state, action){

//   }
// export default function TrailerProvider({ children }:{children:React.ReactNode}) {
//     const [state, dispatch] = useReducer(reducer,{movie:[], profile:null});
//     useEffect(()=>{
//          let profile = localStorage.getItem("profile"); 
//     if( profile !== null){
//     JSON.parse(profile) as localProfile;
     
//     }
//     },[]);

    
//   return (
//     <ListContext.Provider>
//       {children}
//     </ListContext.Provider>
//   );
// }