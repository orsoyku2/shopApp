import React from 'react'
import './styles.scss'
import Directory from '../../components/directory/index'
import {Switch, Route, Link} from 'react-router-dom'
const HomePage = ( props ) => {
      console.log(props.match.params)
      return (<div className="homepage">
            <Directory />
            <button onClick={() => props.history.push('/hats')}>HATS</button>
         
      
      </div>)
     
}
export default HomePage;