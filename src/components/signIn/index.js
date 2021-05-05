import React, { Component } from 'react'
import FormInput from '../form-input/index'

export default class SignIn extends Component {
      state = {
            email: '',
            password: ''
      }
      handleChange = (e) => {
            const {value,name} = e.target;
            this.setState({[name]:value})
      }
      handleSubmit = (e) => {
            e.preventDefault();
            this.setState({email:'',password:''})
      }
      render() {
            const {email,password}= this.state;
            return (
                  <div className='sign-in'>
                        <h2>I already have an account</h2>
                        <span>Sign in with your email and password</span>
                        
                  </div>
            )
      }
}
