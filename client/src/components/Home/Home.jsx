import React from 'react'
import Cards from '../Cards/Cards'
import styles from './Home.module.css'


function Home() {
  
    return (
        <div class={styles.Home}>
            <h1 class={styles.title}>Dogs</h1>
            <Cards />
        </div>
    )
}

export default Home