import React, { useState } from 'react'
import { membersList } from '../../constants';
import MemberCard from '../MemberCard';
import styles from '../../style';

const Members = ({admin}) => {
  const [active,setActive]=useState('1');
  console.log(admin);
  const memberEdit=(event,id)=>{
    console.log(id);
  };
  const memberDelete=(event,id)=>{
    console.log(id);
  };
  return (
    <div className='flex flex-col'>
      {admin == true && <div className={`flex ${styles.paddingY} ${styles.paddingX} justify-end items-end animate-[zoomIn_1s_ease-in-out]`}>
        <a href='/admin/member-register'><button className='bg-black text-white w-36 mx-3 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300'>Add Member</button></a>
      </div>}
      <div className={`${styles.paddingY} ${styles.flexCenter} animate-[zoomIn_1s_ease-in-out]`}>
          <select className='cursor-pointer bg-primary h-10 font-poppins text-2xl rounded-lg outline-none' value={active} onChange={(e)=>{setActive(e.target.value)}}>
            <option className={`my-4 font-poppins text-2xl`} value={1}>Current Board</option>
            <option className={`my-4 font-poppins text-2xl`} value={2}>Previous Board</option>
          </select>
      </div>
      
      <div>
        {active==='1' && <section id="current" className={` ${styles.flexCenter} flex-col relative `}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

          <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] animate-[zoomIn_1s_ease-in-out]">
            <h2 className={`${styles.heading2} text-center text-gradient`}>
              Current Board Members
            </h2>
          </div>

          <div className="flex flex-wrap justify-center w-full z-[1]">
            {membersList.map((card) => 
            <div data-aos="fade-up" data-aos-duration='1000'>
              <MemberCard key={card.id} {...card} />
              {admin == true && <div className={`${styles.flexCenter}`}>
                <button className='bg-black text-white w-36 mx-3 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={e=>memberEdit(e,card.id)}>Edit</button>
                <button className='bg-black text-white w-36 mx-3 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={e=>memberDelete(e,card.id)}>Delete</button>
              </div>}
            </div>
            )}
          </div>
          
        </section>}
        
        {active==='2' &&<section id="previous" className={` ${styles.flexCenter} flex-col relative `}>

          <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]" data-aos="fade-up" data-aos-duration='1000'>
            <h2 className={`${styles.heading2} text-center text-gradient`}>
              Previous Board Members
            </h2>
          </div>

          <div className="flex flex-wrap justify-center w-full z-[1]">
          {membersList.map((card) => 
            <div data-aos="fade-up" data-aos-duration='1000'>
              <MemberCard key={card.id} {...card} />
              {admin == true && <div className={`${styles.flexCenter}`}>
                <button className='bg-black text-white w-36 mx-3 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={e=>memberEdit(e,card.id)}>Edit</button>
                <button className='bg-black text-white w-36 mx-3 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={e=>memberDelete(e,card.id)}>Delete</button>
              </div>}
            </div>
            )}
          </div>
        </section>}
      </div>
    
    </div>
  )
}

export default Members;