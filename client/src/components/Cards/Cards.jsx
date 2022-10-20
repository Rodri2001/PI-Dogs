import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear, getDogBack } from '../../redux/actions'
import Card from '../Card/Card'
import styles from "./Cards.module.css"

function Cards() {
  const pages = []
  const dispatch = useDispatch()
  let dogs = useSelector(state => state.dogs)


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getDogBack())
  }, [dispatch])
  console.log(dogs, "xd")

  const [currentPage, setCurrentPage] = useState(1)
  const dogsPerPage = 8;
  const lastIndex = currentPage * dogsPerPage
  const firstIndex = lastIndex - dogsPerPage
  const currentDogs = dogs.slice(firstIndex, lastIndex)

  for (let i = 1; i <= Math.ceil(dogs / dogsPerPage); i++) { //cantidad de elementos totales, dividido limite de elementos por pagina
    pages.push(i);
}
  return (
    <div class={styles.cards}>
      {dogs.map(c => <Card
        id={c.id}
        name={c.name}
        image={c.image}
        breeds={c.breeds}
        height={c.height}
        weight={c.weight}
        temperaments={c.temperaments}
        life_span={c.life_span}
      />)}
    </div>
  )
}

export default Cards