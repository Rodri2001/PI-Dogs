import axios from 'axios'
import { GET_ALL_DOGS, GET_DOGS_ID, CLEAR_DATA, GET_TEMPERAMENTS, GET_DOGS_NAME, ADD_DOG, FILTER, PAGINATE, ORDER_BY_NAME, ORDER_BY_WEIGHT, FILTER_BY_DB, FILTER_BY_TEMPER } from '../actions-types'


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
      await axios.post('http://localhost:3001/dogs', addDog)
         .then((r) => {
            return dispatch({
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
      try {
         await axios.get(`http://localhost:3001/dogs?name=${name}`)
            .then((r) => {
               return dispatch({
                  type: GET_DOGS_NAME,
                  payload: r.data,
               })
            })
      } catch (error) {
         alert('Dog Not Found')
      }
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

export function paginate(payload) {
   return {
      type: PAGINATE,
      payload
   }
}

export function filter(payload) {
   return {
      type: FILTER,
      payload
   }
}

export function sortName(payload) {
   return {
      type: ORDER_BY_NAME,
      payload
   }
}

export function sortWeight(payload) {
   return {
      type: ORDER_BY_WEIGHT,
      payload
   }
}

export function filterByTemper(payload) {
   return {
      type: FILTER_BY_TEMPER,
      payload
   }
}
export function filterByDB(payload) {
   return {
      type: FILTER_BY_DB,
      payload
   }
}