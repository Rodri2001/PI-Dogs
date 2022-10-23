import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clear, getDogID } from '../../redux/actions'
import DogDetail from '../DogDetail/DogDetail'
import styles from './Details.module.css'
import perrino from '../../img/perrino.png'
import Loading from '../Loading/Loading'

function Details() {
  let { id } = useParams()
  const dispatch = useDispatch()

  let dog = useSelector(state => state.dogsID)
  useEffect(() => {
    dispatch(clear())
    dispatch(getDogID(id))
    console.log(id)
  }, [dispatch],)

  if (dog.name) {
    return (
      <DogDetail
        id={dog.id}
        name={dog.name}
        image={dog.image || perrino}
        breeds={dog.breeds}
        height={dog.height}
        weight={dog.weight}
        temperaments={dog.temperaments}
        life_span={dog.life_span}
      />
    )
  } else {
    return (
      <Loading></Loading>
    )
  }

}

export default Details