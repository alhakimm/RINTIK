import { Button } from '@material-tailwind/react';
import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { withRouter } from 'react-router'

// import ReactDOM from 'react-dom'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/login', userData)
         .then(res => {
            console.log(res.data)
            this.setState({
                loading: false
            });
            this.props.history.push('/community')
         })
         .catch(err => {
            console.log(err.response.data)
            alert("Email " + err.response.data.email +"        "+ "Password " + err.response.data.password)
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
                <h1>login page</h1>
                
                <form noValidate onSubmit={this.handleSubmit}>

                    <label for="email">Enter Email:</label>
                    <input id="email" name="email" label="Email"
                    value={this.state.email} onChange={this.handleChange}></input>

                    <label for="password">Enter Password:</label>
                    <input id="password" name="password" label="Password"
                    value={this.state.password} onChange={this.handleChange}></input>

                    <Button type='submit'>Login</Button>
                    <small>dont have account? sign up <Link to="/signup" here></Link></small>
                </form>
            </div>
            
        )
    }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
export default withRouter(Login);