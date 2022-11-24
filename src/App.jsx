import { useState } from 'react'
import './App.css'
import styles from "./styles/App.module.scss"

import Basic from './components/basic.component';

function App() {

  return (
    <div className={`container ${styles.container}`}>
      <Basic />
      <Basic />
      <Basic />

    </div>
  )
}

export default App
