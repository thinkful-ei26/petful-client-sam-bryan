import { API_BASE_URL } from '../config'


export const fetchDogSuccess = (data) => {
    return {
        type:'FETCH_DOG_SUCCESS',
        data
    }
}

export const fetchCat = () => dispatch => {
    fetch(`${API_BASE_URL}/api/dog`)
    .then(res => res.json())
    .then(data => dispatch(fetchDogSuccess(data)))
    .catch(error => console.log(error)) 
}