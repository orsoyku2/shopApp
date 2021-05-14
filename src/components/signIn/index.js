import React, { Component } from 'react'
import FormInput from '../form-input/index'
import './styles.scss'
import CustomButton from '../custom-button/index'
import {signInWithGoogle} from '../../firebase/firebase.utils'
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
            console.log(this.state.email)
            this.setState({email:'',password:''})
      }
      render() {
            const {email,password}= this.state;
            return (
                  <div className='sign-in'>
                        <h2>I already have an account</h2>
                        <span>Sign in with your email and password</span>
                        <form onSubmit={this.handleSubmit}>
                              <FormInput name ='email' type='email' value={this.state.email} label='email' handleChange={this.handleChange}/>
                              <FormInput name='password' type='password' value={this.state.password} label='password' handleChange={this.handleChange}/>
                              <CustomButton type='submit'>Submit me</CustomButton>
                              <CustomButton onClick={signInWithGoogle}>Sign in with google</CustomButton>
                        </form>
                        
                  </div>
            )
      }
}
