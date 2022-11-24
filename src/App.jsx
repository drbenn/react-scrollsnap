import { useEffect, useState, useRef } from 'react'
import './App.css'
import styles from "./styles/App.module.scss"

import Basic from './components/basic.component';

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  function scrollTo(section) {

    section.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    // the standalong non-module className 'container' is for gsap to id the page as all scroll components are contained within this container 
    <div className={`container ${styles.container}`}>
      {/* passing props https://beta.reactjs.org/learn/passing-props-to-a-component */}
      <div ref={section1}>
        <Basic 
          image={`url(/src/assets/bg-1.jpg)`}
          headline={`Basic Scrollsnap 1!`}
          scrollTo={scrollTo}
          goToSectionRef={section2}
          showArrow={true}
          />
      </div>

      <div ref={section2}>
        <Basic 
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`Basic Scrollsnap 2!`}
          scrollTo={scrollTo}
          goToSectionRef={section3}
          showArrow={true}
        />
      </div>

      <div ref={section3}>
        <Basic 
          image={`url(/src/assets/bg-3.jpg)`}
          headline={`Basic Scrollsnap 3!`}
          showArrow={false}
        />
      </div>

    </div>
  )
}

export default App
