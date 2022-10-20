import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from "./Card.module.css"

function Card({ id, name, image, temperaments, life_span, height, weight }) {
  console.log(temperaments, 2)
  return (
    <div class={styles.card}>
      <Link to={`/detail/${id}`}>
        <button>Details</button>
      </Link>
      <div>
        <img class={styles.img} alt={image} src={image}></img>
        <div class={styles.description}>
          <h3 class={styles.title}>{name}</h3>
          <div class={styles.text}>
            <p name='weight'>Peso: {weight}</p>
            <ul>
              {temperaments?.map(temperament => {
                return (<li>{temperament.name}</li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>)
}

export default Card