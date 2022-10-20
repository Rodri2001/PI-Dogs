import React from 'react'
import styles from './DogDetail.module.css'

function DogDetail({ id, name, image, breeds, temperaments, life_span, height, weight }) {
    console.log(temperaments, "temp")
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={image}></img>
            <div>
                <p>Años de vida: {life_span}</p>
                <p>{height}</p>
                <p>{weight}</p>
                <p>{breeds}</p>
                <ul>
                    {temperaments && temperaments.map(temperament => {
                        return (<li>{temperament.name}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default DogDetail