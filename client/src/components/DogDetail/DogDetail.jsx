import React from 'react'
import { Link } from 'react-router-dom'
import styles from './DogDetail.module.css'

function DogDetail({ id, name, image, breeds, temperaments, life_span, height, weight }) {
    console.log(temperaments, "temp")
    return (
        <div className={styles.container}>
            <div className={styles.Navbar}>
                <Link to='/home' >
                    <button>Home</button>
                </Link>
                <Link to='/create'>
                    <button>Create</button>
                </Link>
            </div>
            <div className={styles.dogcontainer}>
                <div className={styles.dog}>
                    <h1>{name && name.toUpperCase()}</h1>
                    <img className={styles.img} src={image} alt={image}></img>
                    <div className={styles.description}>
                        <ul>
                            <li>Años de vida: {life_span}</li>
                            <li>Altura: {height}</li>
                            <li>Peso: {weight}</li>
                            <li>Raza: {breeds}</li>
                        </ul>
                        <ul>
                            {temperaments && temperaments.map(temperament => {
                                return (<li key={temperament.name}>{temperament.name}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogDetail