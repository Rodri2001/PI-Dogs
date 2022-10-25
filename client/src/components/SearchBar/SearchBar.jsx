import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDogBack, getDogsName } from '../../redux/actions'

function SearchBar() {
  let dogs = useSelector(state => state.dogs)
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    search: ""
  })
  const handleInputChange = function (e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getDogsName(input.search))
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input onChange={handleInputChange} type="text" name='search' placeholder="Search"></input>
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default SearchBar