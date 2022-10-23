import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear, getDogBack } from '../../redux/actions'
import Card from '../Card/Card'
import styles from "./Cards.module.css"
import perrino from '../../img/perrino.png'
import Loading from '../Loading/Loading'

function Cards() {
  let dogs = useSelector(state => state.dogs)
  let filter = useSelector(state => state.paginate)

  console.log(filter, 3)

  const [current, setCurrent] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);
  const totalCards = dogs.length

  const dispatch = useDispatch()

  const pages = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i)
  }


  function paginate(pageNumber) {
    return setCurrent(pageNumber)
  }

  useEffect(() => {
    dispatch(getDogBack())
  }, [dispatch])


  if (dogs.length) {

    return (
      <div className={styles.cards}>
        <div className={styles.cardscontainer}>
          {dogs && (filter.length ? filter : dogs).map((c, i) => {
            if (i >= current * 8 - 8 && i < current * 8) {
              console.log(i)
              return <Card
                id={c.id}
                name={c.name}
                image={c.image || perrino}
                breeds={c.breeds}
                height={c.height}
                weight={c.weight}
                temperaments={c.temperaments}
                life_span={c.life_span}
              />
            } else {
              return false
            }
          })}
        </div>
        <div className={styles.paginate}>
          <button onClick={() => paginate(current - 1)}>BACK</button>
          {pages.map(page => (
            <div className={styles.paginateButtons} key={page}>
              <a className={styles.buttons} onClick={() => paginate(page)}>
                {page}
              </a>
            </div>
          ))}
          <button onClick={() => paginate(current + 1)}>NEXT</button>
        </div>
      </div>
    )
  } else {
    return (
      <Loading></Loading>
    )
  }
}

export default Cards


  // id={c.id}
          // name={c.name}
          // image={c.image || perrino}
          // breeds={c.breeds}
          // height={c.height}
          // weight={c.weight}
          // temperaments={c.temperaments}
          // life_span={c.life_span}