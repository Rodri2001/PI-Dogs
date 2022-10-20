import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clear, getDogID } from '../../redux/actions'
import DogDetail from '../DogDetail/DogDetail'
import styles from './Details.module.css'

function Details() {
  let { id } = useParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  let dog = useSelector(state => state.dogsID)
  useEffect(() => {
    dispatch(clear())
    dispatch(getDogID(id))
    console.log(id)
  }, [dispatch],)
  
  console.log(dog, "LALA")
  if (dog) {
    return (
        <DogDetail
          id={dog.id}
          name={dog.name}
          image={dog.image}
          breeds={dog.breeds}
          height={dog.height}
          weight={dog.weight}
          temperaments={dog.temperaments}
          life_span={dog.life_span}
        />
    )
  } else {
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

}

export default Details