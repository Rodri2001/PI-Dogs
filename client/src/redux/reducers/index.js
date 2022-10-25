import { GET_ALL_DOGS, GET_DOGS_ID, GET_TEMPERAMENTS, GET_DOGS_NAME, CLEAR_DATA, ADD_DOG, FILTER, PAGINATE, ORDER_BY_NAME, ORDER_BY_WEIGHT, FILTER_BY_DB, FILTER_BY_TEMPER } from "../actions-types"

const initialState = {
    addDog: {},
    dogs: [],
    allDogs: [],
    dogsID: [],
    temperaments: [],
    paginate: [],
    filter: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
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
        case FILTER:
            return {
                ...state,
                filter: action.payload,
            }
        case ADD_DOG:
            return {
                ...state,
                addDog: action.payload,
            }
        case PAGINATE:
            return {
                ...state,
                paginate: action.payload
            }

        case ORDER_BY_NAME:
            if (action.payload === 'All') {
                return {
                    ...state,
                    dogs: [...state.allDogs],
                }
            }
            if (action.payload === 'asc') {
                const data = [...state.allDogs].sort((a, b) => (a.name?.toUpperCase() > b.name?.toUpperCase() ? 1 : -1))
                return {
                    ...state,
                    dogs: data
                }
            }
            const data = [...state.allDogs].sort((a, b) => (a.name?.toUpperCase() > b.name?.toUpperCase() ? -1 : 1))
            return {
                ...state,
                dogs: data,
            }

        case ORDER_BY_WEIGHT:
            if (action.payload === 'All') {
                return {
                    ...state,
                    dogs: [...state.allDogs],
                }
            }
            if (action.payload === 'light') {
                const data = [...state.allDogs].sort((a, b) => {
                    let pesoA = parseInt(a.weight?.split('-')[0]);
                    let pesoB = parseInt(b.weight?.split('-')[0]);
                    if (pesoA > pesoB) return 1;
                    if (pesoA < pesoB) return -1;
                    else return 0;
                })
                return {
                    ...state,
                    dogs: data
                }
            }
            if (action.payload === 'big') {
                const data = [...state.allDogs].sort((a, b) => {
                    let pesoA = parseInt(a.weight?.split('-')[0]);
                    let pesoB = parseInt(b.weight?.split('-')[0]);
                    if (pesoA > pesoB) return -1;
                    if (pesoA < pesoB) return 1;
                    else return 0;
                })
                return {
                    ...state,
                    dogs: data
                }
            }
            break;

        case FILTER_BY_TEMPER:
            const alldogs = [...state.allDogs];
            const filterTemper = action.payload === 'All' ? alldogs : alldogs.filter(item => {
                if (item.temperaments) {
                    let itemR = item.temperaments.find(e => e.name == action.payload);
                    if (itemR) return itemR
                }
                return false
            })
            return {
                ...state,
                dogs: filterTemper
            }

        case FILTER_BY_DB:
            if (action.payload === 'All') {
                return {
                    ...state,
                    dogs: [...state.allDogs]
                }
            } else if (action.payload === 'db') {
                const data1 = [...state.allDogs].filter((perro) => perro.createInDb === true)
                if (data1.length === 0) {
                    alert('No hay perritos en la base de datos 😭🐶')
                    return {
                        ...state,
                        dogs: [...state.allDogs]
                    }
                } else {
                    return {
                        ...state,
                        dogs: data1
                    }
                }
            } else {
                const data2 = [...state.allDogs].filter((perro) => perro.createInDb === undefined)
                return {
                    ...state,
                    dogs: data2
                }
            }

        default:
            return { ...state }
    }
}

