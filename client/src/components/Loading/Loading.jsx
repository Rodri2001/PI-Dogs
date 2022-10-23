import React from 'react'
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.loading}>
        <div className={styles.container}>
          <div className={styles.detalle}>
          </div>
          <h1>Cargando...</h1>
        </div>
      </div>
  )
}

export default Loading