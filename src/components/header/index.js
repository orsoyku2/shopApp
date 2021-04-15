import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
const Header = () => {
      return (
        <div className="header">
          <Link class="logo-container" to="/">
            <Logo className="logo" />
          </Link>
          <div className="options">
            <Link class="option" to="/shop">
              Shop
            </Link>
            <Link class="option" to="/shop">
              Contact
            </Link>
            <Link class="option" to="/signin">
<<<<<<< HEAD
              Sign In
=======
              Sign in
>>>>>>> abd7b59f9aad2ed73d06df0fe9c26bd32a6b3e5b
            </Link>
          </div>
        </div>
      );
}
export default Header;