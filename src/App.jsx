import React,{useState,useEffect} from 'react'
import styles from './style';

import { Navbar,Footer,HomePage, AboutUs, Members, Contact,Error, Events,Login,Register,Event } from './components'; 
import { Route, Routes } from 'react-router-dom';


const App = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [loggedIn,setLoggedIn] = useState(false);
  console.log(showOverlay);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowOverlay(true);
    }, 2500);
    if(loggedIn) {
    return () => clearTimeout(timeoutId);}
  }, []);

  return (
  <>
    <div className='bg-primary  w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} fixed w-full z-[14] bg-header animate-[fadeInUp_0.5s_ease-in-out]`}>
        <div className={`${styles.boxWidth} text-white `}>
          <Navbar/>
        </div>
      </div>

      <div className={`${styles.flexStart} mt-32`}>
        <div className={`${styles.boxWidth} text-white`}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/members' element={<Members/>}/>
            <Route path='/events/:id' element={<Event/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
            {/* <Route path='/register' element={<Register/>}/> */}
          </Routes>
        </div>
      </div>

      <div className={`bg-header ${styles.paddingX} ${styles.flexStart} mt-5`} data-aos="fade-up" data-aos-duration='1000'>
        <div className={`${styles.boxWidth} text-white`}>
          <Footer/>
        </div>
      </div>
    </div>
    {showOverlay && !loggedIn &&<div className='fixed bg-opacity-80 z-20 overflow-hidden bg-black top-0 bottom-0 right-0 left-0'>
      <Login handler={setShowOverlay} logHandler={setLoggedIn}/>
    </div>}
  </>
)
}
export default App;