import React, { useEffect } from 'react'
import { useGlobalContext } from './Context'
import { Movies } from './Movies'
import { Search } from './Search'
import search from '../assets/searchicon.png'

import "../style/home.css"

export const Home = () => {
  let {isLoading,movies}=useGlobalContext();
  return (
    <div className='home'>
    <div style={{width:"100%"}}><Search/></div>
    {isLoading&&<div class="lds-ring"><div></div><div></div><div></div><div></div></div>}
    {(movies.length==0)?<div className='conditiondiv'><img src={search} alt="" /> Search for your movies or show or celeb to download the cover</div>:
      <div><Movies/></div>}
    </div>
  )
}
