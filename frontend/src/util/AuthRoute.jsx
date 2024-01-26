import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const AuthRoute = ({component: Component, authenticated, ...rest}) => {
  return (
    <Route
    {...rest}
    render={(props) => authenticated === true ? <Redirect to='/community'/> : <Component {...props}/>}
    ></Route>
  )
}

export default AuthRoute