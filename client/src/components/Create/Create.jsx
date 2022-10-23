import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getTemperaments, postDog } from '../../redux/actions'
import styles from './Create.module.css'

function Create() {
  const [errors, setErrors] = useState({})

  const validate = (e) => {

    if (!state[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "El Nombre no puede estar vacio"
      })
    } else if (state[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: false
      })
    }
  }

  let temperament = useSelector(state => state.temperaments)
  const dispatch = useDispatch()
  const [state, setState] = useState({
    temperaments: []
  })

  useEffect(() => {
    console.log(state)
    dispatch(getTemperaments())
  }, [state])



  function handleChange(e) {
    if (e.target.name === "temperaments") {
      console.log(e.target.value)
      setState({
        ...state,
        [e.target.name]: [...state.temperaments, e.target.value]
      })
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
  }


  function handleDelete(e) {
    e.preventDefault()
    setState({
      ...state,
      temperaments: state.temperaments.filter(t => t === e.target.value)
    })
    alert("Temperamentos borrados")
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(postDog(state))
    document.getElementById('form').reset()
    alert("Perrito Agregado Correctamente")
    setState({
      ...state,
      temperaments: state.temperaments.filter(t => t === e.target.value)
    })
  }

  return (
    <form className={styles.form} id='form' onChange={e => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
      <label> Name: </label>
      <input name="name" onChange={(e) => validate(e)}></input>
      {errors.name && <p>{errors.name}</p>}
      <label> Height: </label>
      <input name="height" type="number" onChange={(e) => validate(e)}></input>
      {errors.height && <p>{errors.height}</p>}
      <label> Weight: </label>
      <input name="weight" onChange={(e) => validate(e)} ></input>
      {errors.weight && <p>{errors.weight}</p>}
      <label> Breeds: </label>
      <input name="breeds" onChange={(e) => validate(e)}></input>
      {errors.breeds && <p>{errors.breeds}</p>}
      <label> Life_span: </label>
      <input name="life_span" onChange={(e) => validate(e)}></input>
      {errors.life_span && <p>{errors.life_span}</p>}
      <label> Temperament: </label>
      <select name="temperaments" multiple onChange={(e) => handleChange(e)} >{
        temperament.map((t) => <option name={t.name}>{t.name}</option>)}
      </select>
      <p>Added: </p>
      <div>
        {state.temperaments.length ? state.temperaments.map(t => <div> <button onClick={handleDelete}> {t}</button></div>) : null}
      </div>
      <div>

      </div>
      <button type="submit">Create Videogame</button>


    </form>
  )
}

export default Create