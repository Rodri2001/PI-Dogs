import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDogsName } from '../../redux/actions'

function SearchBar() {
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
  console.log(input, "soy input")
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