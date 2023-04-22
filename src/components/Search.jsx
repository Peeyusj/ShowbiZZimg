import React from 'react'
import '../style/home.css'
import search from '../assets/searchicon.png'
import { useGlobalContext } from './Context'
export const Search = ()=>{
   let {query,setQuery,setIsLoading}=useGlobalContext()
   let setingg=(e)=>{
    setQuery(e.target.value)
    setIsLoading(true)
   }
   if(query.length==0){
    setIsLoading(false)
   }
  return (
<div className='divipouter'>
    <div className='divip'>
    <input placeholder='Type something here...' style={{backgroundImage:`url(${search})`}} value={query} onChange={setingg} type="text"/>
    </div>
</div>
  )
}
