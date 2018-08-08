import React, {Component} from 'react';

class StoreColumn extends Component{

  render() {
    // console.log(this.props.product);

    const list = this.props.price.map( price => {
      return this.props.product.map( product => {
        if(price.product_id === product.id && price.store_id === this.props.currStore.id && product.quantity > 0){
          return (
            <div className="prod-list">
              <p>{product.name}</p>
              <div className="c-list">
                <div className="c-list">
                  <p>{product.name}</p>
                </div>
                <div className="c-list">
                  <i className="material-icons">attach_money</i>
                  <p>Price: {price.price}</p>
                 
                </div>
                  <div className="c-list">
                  <i className="material-icons">shopping_cart</i>
                  <p>Total :{price.price * product.quantity}</p>
                  </div>
              </div>
             
            </div>
          )
        }
      })
    })


    return (
      <div>
        {list}
        </div>
    )
  }
}

export default StoreColumn;
