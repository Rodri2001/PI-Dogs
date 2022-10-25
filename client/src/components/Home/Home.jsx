import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDogBack } from '../../redux/actions'
import Cards from '../Cards/Cards'
import styles from './Home.module.css'


function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogBack())
    }, [dispatch])
    return (
        <div className={styles.Home}>
            <h1 className={styles.title}>Dogs</h1>
            <Cards />
        </div>
    )
}

export default Home