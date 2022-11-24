import { useEffect, useRef } from "react";
import styles from './basic.module.scss'
import BackgroundImage from '../assets/bg-1.jpg';


export default function Basic({ 
  image, 
  headline,
  scrollTo,
  goToSectionRef,
  showArrow
}) {
  const sectionRef = useRef();
  return(
    <div className={styles.section} ref={sectionRef}
      style={{backgroundImage: `${image}`}}>
      <div className={styles.copy}>
        <h2>{headline}</h2>
      </div>
    {/* ternary if statement, if showArrow, then show button, else, no button */}
    {showArrow && (
            <button 
            className={styles.downArrow} 
            onClick={() => scrollTo(goToSectionRef)}>
          </button>
    )}

    </div>
  )
}