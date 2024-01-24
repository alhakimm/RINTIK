import { Button } from '@material-tailwind/react';
import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { withRouter } from 'react-router'

// import ReactDOM from 'react-dom'

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            username: '',
            loading: false,
            errors: {}
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            username: this.state.username
        }
        axios.post('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/signup', newUserData)
         .then(res => {
            console.log(res.data)
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
            console.log(localStorage)
            this.setState({
                loading: false
            });
            this.props.history.push('/community')
         })
         .catch(err => {
            console.log(err.response.data)
            alert("Email " + err.response.data.email +"        "+ "Password " + err.response.data.password + 
                    "confirm password " + err.response.data.confirmPassword +"        "+ "Username " + err.response.data.username)
            this.setState({
                errors: err.response.data,
                loading: false
            })
         })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        // const {classes} = this.props
        const {errors, loading} = this.state
        return (
            <div>
                <h1>Signup page</h1>
                
                <form noValidate onSubmit={this.handleSubmit}>

                    <label for="email">Enter Email:</label>
                    <input id="email" name="email" label="Email"
                    value={this.state.email} onChange={this.handleChange}></input>

                    <label for="password">Enter Password:</label>
                    <input id="password" name="password" label="Password"
                    value={this.state.password} onChange={this.handleChange}></input>

                    <label for="confirmPassword">Confirm Password:</label>
                    <input id="confirmPassword" name="confirmPassword" label="Comfirm Password"
                    value={this.state.confirmPassword} onChange={this.handleChange}></input>
                    
                    <label for="username">Enter Username:</label>
                    <input id="username" name="username"
                    value={this.state.username} onChange={this.handleChange}></input>

                    <Button type='submit'>Signup</Button>
                    {/* camne nak link dri page ni ke signup */}
                    <small>already have an account? login <Link to="/" >here</Link></small>
                </form>
            </div>
            
        )
    }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
export default withRouter(Signup);