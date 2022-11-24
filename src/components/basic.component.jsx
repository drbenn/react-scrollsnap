import { useEffect, useRef } from "react";
import styles from './basic.module.scss'
import BackgroundImage from '../assets/bg-1.jpg';


export default function Basic({ image, headline }) {

  return(
    //figure out passing props later
    <div className={styles.section} 
    // style={{backgroundImage: `url('/src/assets/bg-1.jpg`}}>
      style={{backgroundImage: `${image}`}}>
    {/* <div className={styles.section}> */}
      <div className={styles.copy}>
        <h2>{headline}</h2>
      </div>
      {/* Image tag not available and related to Next.js & React Native?? */}
      {/* <Image src={`/src/assets/bg.jpg`} layout={ `fill`} /> */}

      <div className={styles.downArrow}></div>
    </div>
  )
}