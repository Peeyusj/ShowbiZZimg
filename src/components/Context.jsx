import React,{createContext,useContext,useEffect, useState} from "react";
const AppContext=React.createContext()
const AppProvider=({children})=>{
    const [movies,setMovies]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [query,setQuery]=useState("")
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0d6425ffc8msh9c2cab543c69ebap10d531jsn75655d73f5e7',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    
    let fetchapi=()=>{ fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${query}`, options)
        .then(response => response.json())
        .then(response =>{
            setIsLoading(false)
            setMovies(response.d)
            console.log(response.d)
           setIsLoading(false)
        }).catch(err => console.error(err));
}
        useEffect(()=>{
           let timer= setTimeout(() => {
            fetchapi();
            }, 500);
            return()=>{
                clearTimeout(timer)
            }
        },[query])
return(<AppContext.Provider value={{isLoading,movies,query,setQuery,setIsLoading}}>
{children}
</AppContext.Provider>)
}
const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext}