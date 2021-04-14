import React from 'react'
import './styles.scss'

const FormInput = () => {
    return <div className='group'>
            <form onSubmit = {this.handleSubmit}>
                              <input onChange={this.handleChange} type="email" name="email" required value={email}></input>
                              <label>Email</label>
                              <input onChange={this.handleChange} type="password" name="password" value={password} required></input>
                              <label>Password</label>
                              <input type="submit" value="Submit" />
                             
                        </form>

    </div>
}
export default FormInput