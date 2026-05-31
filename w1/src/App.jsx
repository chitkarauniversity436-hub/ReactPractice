import React from 'react'
import {useEffect} from 'react' 
import { useState } from 'react'

const App = () =>{
  const[get,set] = useState([]);
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users").then((x)=>x.json()).then((d)=>set(d));

  },[]);

  return(
    <>
    <marquee style={{fontSize:"40px"}}>Hlo fucker , stay hard , stay hard , stay fucking hard </marquee>
    <h1 style={{textAlign:"center"}}>UseEffect</h1>
    
     <ul>
     { get.map((x)=>{
      return <li key={x.id}>{x.name}</li>
     })

     }

     </ul>

    </>
  )
}

export default App ;