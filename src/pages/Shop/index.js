import React, { Component } from 'react'
import SHOP_DATA from '../Shop/shopData'
import PreviewCollection from "../../components/preview-collection/index";
export default class ShopPage extends Component {
      state = {
            shopData:SHOP_DATA
      }
      render() {
            const {shopData} = this.state
            return (
                  <div>
                        {shopData.map(({ id, ...otherProps }) => (<PreviewCollection key={id}  {...otherProps}/>))}
                  </div>
            )
      }
}
