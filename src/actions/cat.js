import { API_BASE_URL } from '../config'

export const fetchCatError= (error) => {
    return {
        type:'FETCH_CAT_ERROR',
        error,
    }
}

export const fetchCatRequest = () => {
    return {
        type:'FETCH_CAT_REQUEST'
    }
}

export const fetchCatSuccess = (data) => {
    return {
        type:'FETCH_CAT_SUCCESS',
        data
    }
}

export const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest())
    fetch(`${API_BASE_URL}/api/cat`)
    .then(res => res.json())
    .then(data => dispatch(fetchCatSuccess(data)))
    .catch(error => dispatch(fetchCatError(error))) 
}

export const deleteCatRequest = () => {
    return {
        type:'DELETE_CAT_REQUEST'
    }
}

export const deleteCatError= (data) => {
    return {
        type:'DELETE_CAT_ERROR',
        data
    }
}
export const deleteCatSuccess = () => {
    return {
        type:'DELETE_CAT_SUCCESS',
         }
}

export const deleteCat = () => dispatch => {
    return fetch(`${API_BASE_URL}/api/cat`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }    
    })
    .then(() => dispatch(deleteCatSuccess()))
    .then(()=>dispatch(fetchCat()))
    .catch(error => dispatch(deleteCatError(error))) 
}