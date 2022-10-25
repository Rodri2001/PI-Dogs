import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Card.module.css"

function Card({ id, name, image, temperaments, life_span, height, weight}) {
  return (
    <div className={styles.card}>
      <div className={styles.both}>
        <Link to={`/detail/${id}`}  >
          <button>Details</button>
        </Link>
        <img className={styles.img} alt={image} src={image} ></img>
        <div className={styles.description}>
          <h3 className={styles.title} key={id}>{name}</h3>
          <div className={styles.text}>
            <p name='weight'>Peso: {weight}</p>
            <ul>TEMPERAMENTS :
              {temperaments?.map(temperament => {
                return (<li key={temperament.name}>{temperament.name}</li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>)
}

export default Card