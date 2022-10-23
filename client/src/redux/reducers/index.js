import { filter } from "../actions"
import { GET_ALL_DOGS, GET_DOGS_ID, GET_TEMPERAMENTS, GET_DOGS_NAME, CLEAR_DATA, ADD_DOG } from "../actions-types"

const initialState = {
    addDog: {},
    dogs: [],
    dogsID: [],
    temperaments: [],
    paginate:[],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
            }
        case GET_DOGS_ID:
            return {
                ...state,
                dogsID: action.payload,
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
            }
        case GET_DOGS_NAME:
            return {
                ...state,
                dogs: action.payload,
            }
        case CLEAR_DATA:
            return {
                ...state,
                dogsID: action.payload,
            }
        case ADD_DOG:
            return {
                ...state,
                addDog: action.payload,
            }
        case "PAGINATE":
            return{
                ...state,
                paginate: action.payload
            }
        default:
            return { ...state }
    }
}

