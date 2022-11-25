import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {useEffect, useState} from 'react';
import RingLoader from "react-spinners/RingLoader";


const Loader=() =>{
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
          setLoading(false)
      },1500);
  },[])

return(
  <div className='flex'>
      {
      loading?
        <div className='flex justify-center items-center w-full h-[100vh] bg-[#2e2c2c]'> 
          <RingLoader color={'#eecc21'} loading={loading} size={150}/>
        </div>
      :<App />
      }

  </div>
)
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loader />
  </React.StrictMode>
)
