import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Landing.module.css"


function Landing() {
  return (
    <div class={styles.Landing}>
      <div class={styles.textContainer}>
        <h1 class={styles.title}>Welcome To Dogify</h1>
        <div class={styles.text}>
          <Link to='/home' >
            <button class={styles.button}>Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing