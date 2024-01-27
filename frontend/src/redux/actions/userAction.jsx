import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../types'
import axios from 'axios'

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_UI})
    axios.post('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/login', userData)
         .then(res => {
            console.log(res.data)
            
            setAuthorizationHeader(res.data)
            dispatch(getUserData())
            dispatch({type: CLEAR_ERRORS})
            history.push('/community')
         })
         .catch(err => {
            console.log(err.response.data)
            alert("Email " + err.response.data.email +"        "+ "Password " + err.response.data.password)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
         })
}

export const getUserData = () => (dispatch) => {
    axios.get('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/user')
            .then(res => {
                console.log(res.data)
                localStorage.setItem('userImage', res.data)
                dispatch({
                    type: SET_USER,
                    payload: res.data
                })
            })
            .catch(err => console.log(err))
}

// export const logOutUser = () => {
//     localStorage.removeItem('FBIdToken')
//     delete axios.defaults.headers.common['Authorization']
// }

const setAuthorizationHeader = (token) => {
    localStorage.setItem('FBIdToken', `Bearer ${token}`)
    console.log(localStorage)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    console.log(axios.defaults.headers.common['Authorization'])
}