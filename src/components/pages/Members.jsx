import React, { useState,useEffect } from 'react'
import { RingLoader } from 'react-spinners';
import {BoltLoader} from "..";
import MemberCard from '../MemberCard';
import styles from '../../style';
import axios from 'axios';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import { eventYears } from '../../constants'; 

const Members = () => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [years,setYears]=useState(null)
  let isAvailable=1;
  
  let year=(new Date().getFullYear());
  let month=new Date().getMonth();
  // console.log((new Date().getMonth()));
  if(month>=5)
  {
    year=(year).toString()+'-'+(year+1-2000).toString();
  }
  else
  {
    year=(year-1).toString()+'-'+(year-2000).toString();
  }
  // console.log('year;',year);
  const [active,setActive]=useState(year.replace('-',' - '));
  
  useEffect(()=>{
    axios.get(`https://foss-backend.onrender.com/api/members/years`)
    .then((res)=>{console.log(res);setYears(res.data);setLoading(false);})
    .catch((err)=>{
      console.log("error:",err.message);
      setError(err.message);
      setLoading(false);
    }); 
    
  },[]);
  
  // console.log(active)
  useEffect(()=>{
    // console.log('active: ',active)
    
    axios.get(`https://foss-backend.onrender.com/api/members/year/${active.replace(' - ','-')}`)
      .then((res)=>{console.log(res);setData(res.data);setLoading(false);})
      .catch((err)=>{
        console.log("error:",err.message);
        setError(err.message);
        setLoading(false);
      }); 

  },[active]);
  
  // let years=new Set(eventYears?.map((x)=>x.eventYear));
  // years=[...years]?.sort().reverse();
  // console.log('Years',years);
  // const selectYear=data?.filter(x=>{return x.eventYear === active});
  // if (selectYear == 0){isAvailable=0;}

  const handleChange = (event) => {
    setActive(event.target.value);
  };

  // console.log("Data: ",data)
  // console.log("Years: ",years)
  // console.log("Active Years: ",active)
  
  return (
    <div className='flex flex-col'>
      
      <div className={`py-10 ${styles.flexCenter} flex-col animate-[zoomIn_1s_ease-in-out]`}>
          {/* <select className='cursor-pointer bg-primary h-10 font-poppins text-2xl rounded-lg outline-none' value={active} onChange={(e)=>{setActive(e.target.value)}}>
          {years?.map((x)=>(
            <option className={`my-4 font-poppins text-2xl`} value={x}>{x}</option>
          ))}
          </select> */}
          <div className=" flex justify-between items-center md:flex-row flex-col relative z-[1] animate-[zoomIn_1s_ease-in-out]">
            <h2 className={`${styles.heading2} text-gradient`}>
              Board Members
            </h2>
          </div>
          <FormControl className='flex w-[10rem]'>
            <Select value={active} onChange={handleChange} >
              {years?.years.map((x)=>(
                <MenuItem key={x.id} value={x.year}>{x.year}</MenuItem>
              ))}
            </Select>
        </FormControl>
      </div>
      
      <div>
        <section id="current" className={` ${styles.flexCenter} flex-col relative `}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />


          <div className="flex flex-wrap justify-center p-3  sm:w-[25rem] w-full z-[1]">
            {data?.map((card) => 
              <div data-aos="fade-up" data-aos-duration='1000'>
                <MemberCard key={card._id} {...card} />
              </div>
            )}
            {isAvailable === 0 && <div className='flex'><span className={`${styles.heading2} text-center`}>Members of {active} are Yet to be Updated...</span></div>}
              {loading && <div className='flex my-10'> 
                {/* <RingLoader color={'#eecc21'} loading={loading} size={150}/> */}
                <BoltLoader/>
              </div>}
              {error && <div className='flex'><span className={`${styles.heading2} text-center`}>{error}!</span></div>}
          </div>
          
        </section>        
      </div>
    
    </div>
  )
}

export default Members;