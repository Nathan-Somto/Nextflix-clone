import { IMovie, ITvOriginals } from '@/app/types';
import React from 'react'
type props ={
    data :IMovie[] | ITvOriginals[]
}
function Grid({data}:props) {
  return (
    <div>Grid</div>
  )
}

export default Grid;