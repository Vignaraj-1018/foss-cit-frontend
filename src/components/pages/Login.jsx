import React from 'react'
import styles from '../../style'
import * as yup from 'yup';
import { useState } from 'react';
import { google } from '../../assets';

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const data=yup.object().shape({
        email:yup.string().email().required(),
        password:yup.string().required()
      })
  
    const handleSubmit= async event=>{
      event.preventDefault();
      console.log(email,password);
  
      let formData={
        email:email,
        password:password
      }
      const isValid=await data.isValid(formData);
      console.log(formData);
      console.log(isValid);
  
    }
    
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
        <section id={'history'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInDown_1s_ease-in-out]`}>
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={`${styles.heading2} text-center text-gradient`}>
                    Log In
                </h2>
            </div>
            <div className="flex justify-center items-center w-full z-[1]">
                <div className='flex flex-col justify-center items-center ss:w-[50%] w-[95%] p-4 bg-[#212015] bg-opacity-80 backdrop-blur-sm rounded-3xl m-auto object-fit'>
                    <div className='flex flex-col justify-center items-center font-poppins text-justify text-white text-base'>
                        <form method='post' autoComplete='off'>
                            
                            <div className={` my-5 `}>
                                <input type={'email'} name={'email'} placeholder={'E-Mail'} className=' sm:w-[20rem] w-full my-3' onChange={e=>setEmail(e.target.value)}/>
                            </div>
                            
                            <div className={`my-5`}>
                                <input type='password' name={'password'} placeholder={'Password'} className='sm:w-[20rem] w-full my-3' onChange={e=>setPassword(e.target.value)}/>
                            </div>

                            <div className='flex justify-center items-center m-10'>
                                <button className='bg-white text-black w-40 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={handleSubmit}>Log In</button>
                            </div>

                        </form>
                        <div className='flex h-[1px] w-full bg-white'/>
                        <div className='flex flex-row bg-black rounded-3xl mt-5 w-50 p-3 hover:scale-105 ease-in-out duration-300 cursor-pointer'>
                            <img alt='google' src={google} className={`w-[21px] h-[21px] object-contain bg-white m-auto rounded-xl`}/>
                            <span className={`${styles.paragraph} mx-3 text-base`}>Log in with Google</span>
                        </div>
                    </div>
                    <div className='flex justify-center items-center m-10'>
                        <span className={`${styles.paragraph}`}>New Here? <a href='register' className='hover:text-secondary'>Register</a></span>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Login