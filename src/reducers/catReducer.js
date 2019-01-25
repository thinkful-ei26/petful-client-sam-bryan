import { FETCH_CAT_SUCCESS, FETCH_CAT_REQUEST, FETCH_CAT_ERROR, DELETE_CAT_SUCCESS, DELETE_CAT_REQUEST, DELETE_CAT_ERROR } from '../actions/cat'

const initialState = {
  data: null,
  error: null,
  loading: false
}

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CAT_REQUEST':
      return {
        ...state, 
        loading: true
      }
    case 'FETCH_CAT_SUCCESS':
      return {
        ...state,
        data: action.data,
        loading: false
      }
      case 'FETCH_CAT_ERROR':
      return {
        ...state, 
        loading: false,
        error: action.error
      }
      case 'DELETE_CAT_REQUEST':
      return {
        ...state, 
        loading: true
      }
    case 'DELETE_CAT_SUCCESS':
      return {
        ...state,
        data: null,
        loading: false
      }
      case 'DELETE_CAT_ERROR':
      return {
        ...state, 
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default catReducer