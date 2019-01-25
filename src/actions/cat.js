import { API_BASE_URL } from '../config'


export const fetchCatSuccess = (data) => {
    return {
        type:'FETCH_CAT_SUCCESS',
        data
    }
}

export const fetchCat = () => dispatch => {
    fetch(`${API_BASE_URL}/api/cat`)
    .then(res => res.json())
    .then(data => dispatch(fetchCatSuccess(data)))
    .catch(error => console.log(error)) 
}