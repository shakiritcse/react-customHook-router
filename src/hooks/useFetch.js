import { useEffect, useState } from "react";

export const useFetch=(initData,url)=>{
   
    const [data,setData]=useState(initData)
    const [error,setError]=useState("")
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
     fetch(url)
     .then(res=>res.json())
     .then(result=>{
        setData(result)
        setError("")
        setIsLoading(false)
      
    })
     .catch((err)=>{
        setError(err.message)
        setIsLoading(false)
        setData(null)
     })
    },[])
    return {
        data,
        isLoading,
        error
    }
}