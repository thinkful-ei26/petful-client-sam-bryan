import { FETCH_DOG_SUCCESS, FETCH_DOG_REQUEST, FETCH_DOG_ERROR, DELETE_DOG_SUCCESS, DELETE_DOG_REQUEST, DELETE_DOG_ERROR } from '../actions/dog'

const initialState = {
  data: null,
  error: null,
  loading: false
}

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOG_REQUEST':
      return {
        ...state, 
        loading: true
      }
    case 'FETCH_DOG_SUCCESS':
      return {
        ...state,
        data: action.data,
        loading: false
      }
      case 'FETCH_DOG_ERROR':
      return {
        ...state, 
        loading: false,
        error: action.error
      }
      case 'DELETE_DOG_REQUEST':
      return {
        ...state, 
        loading: true
      }
    case 'DELETE_DOG_SUCCESS':
      return {
        ...state,
        data: null,
        loading: false
      }
      case 'DELETE_DOG_ERROR':
      return {
        ...state, 
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default dogReducer