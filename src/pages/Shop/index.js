import React, { Component } from 'react'
import shopData from "../Shop/shopData";
import PreviewCollection from '../../components/preview-collection'

export default class Shop extends Component {
      state = {
            collections : shopData
      }
      render() {
            const { collections } = this.state;
            return (
                  <div>
                        {collections.map(({id,...otherProps} )=> (
                        <PreviewCollection key={id} {...otherProps}/>
                         ))}
 
                  </div>
            )
      }
}
