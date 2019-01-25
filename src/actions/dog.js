import { API_BASE_URL } from '../config'


// const initialState = {
//     data: null,
//     error: null,
//     loading: false
//   }

export const fetchDogError = (error) => {
    return {
        type:'FETCH_DOG_ERROR',
        error,
    }
}

export const fetchDogRequest = () => {
    return {
        type:'FETCH_DOG_REQUEST'
    }
}

export const fetchDogSuccess = (data) => {
    return {
        type:'FETCH_DOG_SUCCESS',
        data
    }
}

export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest())
    fetch(`${API_BASE_URL}/api/dog`)
    .then(res => res.json())
    .then(data => dispatch(fetchDogSuccess(data)))
    .catch(error => dispatch(fetchDogError(error))) 
}


export const deleteDogRequest = () => {
    return {
        type:'DELETE_DOG_REQUEST'
    }
}

export const deleteDogError= (error) => {
    return {
        type:'DELETE_DOG_ERROR',
        error
    }
}
export const deleteDogSuccess = () => {
    return {
        type:'DELETE_DOG_SUCCESS',
         }
}

export const deleteDog = () => dispatch => {
    return fetch(`${API_BASE_URL}/api/dog`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }    
    })
    .then(() => dispatch(deleteDogSuccess()))
    .then(()=>dispatch(fetchDog()))
    .catch(error => dispatch(deleteDogError(error))) 
}