import axios from 'axios'
import { GET_ALL_DOGS, GET_DOGS_ID, CLEAR_DATA, GET_TEMPERAMENTS, GET_DOGS_NAME, ADD_DOG } from '../actions-types'


export function getDogBack() {
   return async function (dispatch) {
      let info = await axios("http://localhost:3001/dogs")
      return dispatch({
         type: GET_ALL_DOGS,
         payload: info.data,
      })
   }
}

export function getDogID(id) {
   return async function (dispatch) {
      await axios(`http://localhost:3001/dogs/${id}`)
         .then((r) => {
            return dispatch({
               type: GET_DOGS_ID,
               payload: r.data,
            })
         })
   }
}

export function postDog(addDog) {
   return async function (dispatch) {
      await axios.post('http://localhost:3001/dogs',addDog )
         .then((r) => {
            return  dispatch({
               type: ADD_DOG,
               payload: r.data,
            })
         })
   }
}

export function getTemperaments() {
   return async function (dispatch) {
      await axios.get('http://localhost:3001/temperaments')
         .then((r) => {
            return dispatch({
               type: GET_TEMPERAMENTS,
               payload: r.data,
            })
         })
   }
}

export function getDogsName(name) {
   return async function (dispatch) {
      await axios.get(`http://localhost:3001/dogs?name=${name}`)
         .then((r) => {
            return dispatch({
               type: GET_DOGS_NAME,
               payload: r.data,
            })
         })
   }
}

export function clear() {
   return async function (dispatch) {
      return dispatch({
         type: CLEAR_DATA,
         payload: []
      })
   }
}

export function filter(payload){
   return {
      type:"PAGINATE",
      payload
    }
}
