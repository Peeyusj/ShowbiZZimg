import React from 'react'
import { saveAs } from 'file-saver'
import { useGlobalContext } from './Context'
import "../style/movies.css"
import down from "../assets/download.png"
export const Movies = () => {
    const {movies}=useGlobalContext()
let downImg=(im,index)=>{
  saveAs(im,"img"+index)
}
  return (
    <div className='outer'>
    {movies&&movies.map((item,index)=><div className='innerdiv'>
        <div className='titl'>{item.l.slice(0,15)}...</div>
        {item.i?.imageUrl&&<div className='img2'><img src={down} onClick={()=>downImg(item.i.imageUrl,index)} alt="" />
        <div className='downl'>Download image</div>
        </div>}
        <div className="img1" ><img src={item.i?.imageUrl} style={{color:"white"}} alt={item.s} srcset="" /></div>
    </div>)
}
    </div>
  )
}
