import React, {Component} from 'react';
import {post} from 'axios';

class ListItem extends Component {
  render() {
    return(
      <div>
        {this.props.listProduct.map( (item, index) => {
          if(item.quantity > 0){
            return(
              <div className="input-field card div-product-input" key={index}>
                <div className="item-container">
                  <button className="waves-effect waves-light btn-small  bl-btn" onClick={() => this.props.minusQuantity(item.product)}><i className="material-icons small">remove</i></button>
                  <input type='text' name='quantity' value={item.quantity} className='quantity'/>
                  <button className="waves-effect waves-light btn-small  bl-btn" onClick={() => this.props.addQuantity(item.product)} ><i className="material-icons small">add</i></button>
                  <p className="s6 item-ls">{item.product.name}</p>
                </div>
                <button className="waves-effect waves-light btn-small del-btn" onClick={() => this.props.deleteItem(item.product)}><i className="material-icons small">cancel</i></button>
              </div>
            );
          }
        })} 
        <button className="waves-effect waves-light btn-small">Save List</button>
      </div>    
    );
  }
}

export default ListItem;