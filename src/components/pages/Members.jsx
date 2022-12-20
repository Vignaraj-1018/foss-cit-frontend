import React from 'react'
import { membersList } from '../../constants';
import MemberCard from '../MemberCard';
import styles from '../../style';

const Members = () => {
  return (
    <div>
      <section id="current" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] animate-[zoomIn_1s_ease-in-out]">
          <h2 className={`${styles.heading2} text-center text-gradient`}>
            Current Board Members
          </h2>
        </div>

        <div className="flex flex-wrap justify-center w-full z-[1]">
          {membersList.map((card) => <MemberCard key={card.sno} {...card} />)}
        </div>
      </section>
      
      <section id="previous" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]" data-aos="fade-up" data-aos-duration='1000'>
          <h2 className={`${styles.heading2} text-center text-gradient mt-16`}>
            Previous Board Members
          </h2>
        </div>

        <div className="flex flex-wrap justify-center w-full z-[1]">
          {membersList.map((card) => <MemberCard key={card.sno} {...card} />)}
        </div>
      </section>
    </div>
  )
}

export default Members;