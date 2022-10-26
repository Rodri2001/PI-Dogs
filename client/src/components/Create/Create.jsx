import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { getTemperaments, postDog } from '../../redux/actions'
import styles from './Create.module.css'

function Create() {

  useEffect(() => {
    
  }, [])
  let temperament = useSelector(state => state.temperaments)
  const dispatch = useDispatch()
  const [state, setState] = useState({
    temperaments: [],
    name: "",
    breeds: "",
    height: "",
    weight: "",
    life_span: ""
  })

  const [errors, setErrors] = useState({
    name: "",
    breeds: "",
    height: "",
    weight: "",
    life_span: ""
  })

  const [button, setButton] = useState(styles.button)

  const validate = (e) => {
    if (e.target.value.length < 4 && e.target.name === 'name') {
      setErrors(
        {
          ...errors,
          name: "El nombre tiene que tener mas de 4 caracteres",
        }
      )
    } else if (e.target.value.length < 4 && e.target.name === 'breeds') {
      setErrors(
        {
          ...errors,
          breeds: "La raza tiene que tener mas de 4 caracteres"
        }
      )
    } else if (e.target.value < 0 && e.target.name === "height") {
      setErrors(
        {
          ...errors,
          height: "No se pueden usar numeros negativos"
        }
      )
    } else if (e.target.value < 0 && e.target.name === "weight") {
      setErrors(
        {
          ...errors,
          weight: "No se pueden usar numeros negativos"
        }
      )
    } else if (e.target.value < 0 && e.target.name === "life_span") {
      setErrors(
        {
          ...errors,
          life_span: "No se pueden usar numeros negativos"
        }
      )
    }
    else {
      setErrors(
        {
          ...errors,
          [e.target.name]: ""
        })
    }
  }

  function handleChange(e) {
    e.preventDefault()
    if (e.target.name === "temperaments") {
      let newTem = state.temperaments
      newTem.push(e.target.value)
      setState({
        ...state,
        temperaments: newTem
      })
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
    if (Object.values(state).every(el => el.length) && Object.values(errors).every(el => !el.length)) {
      setButton(styles.buttonActive)
    } 
    if(Object.values(errors).some(el => el.length))  {
      console.log("hoola")
      setButton(styles.button)
    }

  }

  function handleDelete(e) {
    e.preventDefault()
    let filterTemp = state.temperaments.filter(t => e.currentTarget.textContent !== t)
    console.log(filterTemp)
    setState({
      ...state,
      temperaments: filterTemp
    })
    console.log(state, "d")
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (Object.values(state).every(el => el.length) && Object.values(errors).every(el => !el.length)) {
      dispatch(postDog(state))
      document.getElementById('form').reset()
      alert("Perrito Agregado Correctamente")
      setState({
        ...state,
        temperaments: [],
      })
      setButton(styles.button)
    }
  }

  return (
    <div>
      <div className={styles.Navbar}>
        <Link to='/home' >
          <button>Home</button>
        </Link>
        <Link to='/create'>
          <button>Create</button>
        </Link>
      </div>
      <form className={styles.form} id='form' onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
        <label>Nombre:</label>
        <input name="name" onChange={(e) => validate(e)}></input>
        <p className={styles.errors}>{errors.name}</p>
        <label>Raza:</label>
        <input name="breeds" onChange={(e) => validate(e)}></input>
        <p className={styles.errors}>{errors.breeds}</p>
        <label>Altura:</label>
        <input name="height" type="number" onChange={(e) => validate(e)}></input>
        <p className={styles.errors}>{errors.height}</p>
        <label>Peso:</label>
        <input name="weight" type="number" onChange={(e) => validate(e)} ></input>
        <p className={styles.errors}>{errors.weight}</p>
        <label>Tiempo de vida:</label>
        <input name="life_span" type="number" onChange={(e) => validate(e)}></input>
        <p className={styles.errors}>{errors.life_span}</p>
        <label>Temperamento: </label>
        <select name="temperaments" multiple  >{
          temperament.map((t) => <option key={t.name} name={t.name}>{t.name}</option>)}
        </select>

        <div>
          {state.temperaments.length ? <p>Click to delete: </p> : null}
          {state.temperaments.length ? state.temperaments.map(t => <button key={t} onClick={(e) => handleDelete(e)}>{t}</button>) : null}
        </div>
        <div>

        </div>
        <button className={button} type="submit">Create Dog</button>
      </form>
    </div>
  )
}

export default Create