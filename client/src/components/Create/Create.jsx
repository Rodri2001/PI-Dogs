import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getTemperaments, postDog } from '../../redux/actions'

function Create() {
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
    if (e.target.name == "temperaments") {
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
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(postDog(state))
    document.getElementById('form').reset()
  }

  return (
    <form id='form' onChange={e => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
      <label> Name: </label>
      <input name="name"></input>
      <label> Height: </label>
      <input name="height"></input>
      <label> Weight: </label>
      <input name="weight"></input>
      <label> Breeds: </label>
      <input name="breeds"></input>
      <label> Life_span: </label>
      <input name="life_span"></input>
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