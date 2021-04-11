import React from 'react'
import './styles.scss'
import Directory from '../../components/directory/index'
const HomePage = ( props ) => {
      console.log(props.match.params)
      return (<div className="homepage">
            <Directory />
      </div>)
     
}
export default HomePage;