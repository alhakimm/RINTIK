import axios from "axios"


export const getUserData = () => {
    axios.get('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/user')
            .then(res => {
                console.log(res.data)
                // localStorage.setItem('userImage', res.data)
                // dispatch({
                //     type: SET_USER,
                //     payload: res.data
                // })
            })
            .catch(err => console.log(err))
}


export const setAuthorizationHeader = (token) => {
    localStorage.setItem('FBIdToken', `Bearer ${token}`)
    console.log(localStorage)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    console.log(axios.defaults.headers.common['Authorization'])
}
