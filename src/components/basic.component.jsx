import { useEffect, useRef } from "react";
import styles from './basic.module.scss'


export default function Basic() {

  return(
    <div className={styles.section}>
      <div className={styles.copy}>
        <h2>Basic Scrollsnap</h2>
      </div>
      {/* Image tag not available and related to Next.js & React Native?? */}
      {/* <Image src={'../assets/bg.jpg'} layout={'fill'} /> */} 


      <div className={styles.downArrow}></div>
    </div>
  )
}