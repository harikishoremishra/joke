import React, { useEffect, useState } from 'react'

function Joke() {
    const [data,setData]=useState([])
    const fetchData = async()=>
    {
        const data =await fetch("https://official-joke-api.appspot.com/random_joke")
         const result =await data.json();
         setData(result);
         console.log(result)

    }
    useEffect(()=>
    {
        fetchData();
    },[])
        
  return (
    <div>
        
        <button  onClick={fetchData}>generate next joke</button>
        {data && data.setup}
        {data && data.Punchline}
        
       
    </div>
    
  )

}

export default Joke