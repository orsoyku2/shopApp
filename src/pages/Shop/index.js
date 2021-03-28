import React, { Component } from 'react'
import shopData from "../Shop/shopData";

export default class Shop extends Component {
      state = {
            collections : shopData
      }
      render() {
            return (
                  <div>
                        {this.state.collections[0].id}
                        
                        
                  </div>
            )
      }
}
