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
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
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
            <div className='bg-blue-500 w-full h-screen flex items-center justify-center'>
                <div className='max-w-[600px] bg-red-500 p-6 rounded-xl'>
                    <h1 className='font-bold text-3xl mb-6'>Login</h1>
                    
                    <form className='flex flex-col gap-4 items-center' noValidate onSubmit={this.handleSubmit}>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <label for="email">Enter Email:</label>
                                <input id="email" name="email" label="Email" className='w-full rounded-md'
                                value={this.state.email} onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label for="password">Enter Password:</label>
                                <input id="password" name="password" label="Password" className='w-full rounded-md'
                                value={this.state.password} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        

                        <Button type='submit' className='w-full'>Login</Button>
                        {/* camne nak link dri page ni ke signup */}
                        <small>dont have account? sign up <Link to="/signup" >here</Link></small>
                    </form>
                </div>
                
            </div>
            
        )
    }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
export default withRouter(Login);