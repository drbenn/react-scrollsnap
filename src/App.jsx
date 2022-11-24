import { useEffect, useState } from 'react'
import './App.css'
import styles from "./styles/App.module.scss"

import Basic from './components/basic.component';

function App() {
  const bg1 = 'bg-1'

  return (
    <div className={`container ${styles.container}`}>
      {/* passing props https://beta.reactjs.org/learn/passing-props-to-a-component */}
      <Basic 
        image={`url(/src/assets/bg-1.jpg)`}
        headline={`Basic Scrollsnap 1!`}
        />
      <Basic 
        image={`url(/src/assets/bg-2.jpg)`}
        headline={`Basic Scrollsnap 2!`}
      />
      <Basic 
        image={`url(/src/assets/bg-3.jpg)`}
        headline={`Basic Scrollsnap 3!`}
      />

    </div>
  )
}

export default App
