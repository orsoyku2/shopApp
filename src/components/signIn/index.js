import React, { Component } from 'react'
import FormInput from '../form-input/index'

export default class SignIn extends Component {
      state = {
            email: '',
            password: ''
      }
<<<<<<< HEAD
      handleSubmit = event => {
            event.preventDefault();
=======
      handleChange = (e) => {
            const {value,name} = e.target;
            this.setState({[name]:value})
      }
      handleSubmit = (e) => {
            e.preventDefault();
>>>>>>> abd7b59f9aad2ed73d06df0fe9c26bd32a6b3e5b
            this.setState({email:'',password:''})
      }
      render() {
            const {email,password}= this.state;
            return (
                  <div className='sign-in'>
                        <h2>I already have an account</h2>
                        <span>Sign in with your email and password</span>
<<<<<<< HEAD
                        <form onSubmit={this.handleSubmit}>
                        </form>
=======
                        <FormInput/>
                    
>>>>>>> abd7b59f9aad2ed73d06df0fe9c26bd32a6b3e5b
                        
                        
                  </div>
            )
      }
}
