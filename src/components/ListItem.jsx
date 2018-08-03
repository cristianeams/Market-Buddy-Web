import React, {Component} from 'react';
import {post} from 'axios';

class ListItem extends Component {

  render() {
    return(
      // <div className="listContent">
      //   <h1>Your list</h1>
      //   <ul>
      //       {this.props.listProduct.map( (product, index) => {
      //           if(product.quantity > 0){
      //               return (<li key={ index }>
      //                           <span className="prodName">{product.name}</span>
      //                           <button onClick={this.props.addQuantity}> Add </button>
      //                           <span className="prodQuan">{product.quantity}</span>
      //                           <button onClick={this.props.minusQuantity}> Minus </button>
      //                           <button onClick={this.props.deleteItem}> Delete </button>
      //                       </li>);
      //           }
      //       })}
      //   </ul>

      //   <button onClick={this.submitList}>Create List</button>
      // </div>
       
          <div>
            {this.props.listProduct.map( (item, index) => {
              if(item.quantity > 0){
                return(
                  <div className="input-field card div-product-input" key={index}>
                    <div className="item-container">
                      <button onClick={() => this.props.minusQuantity(item.product)}><i className="material-icons small bl-btn">remove</i></button>
                      <input type='text' name='quantity' value={item.quantity} className='quantity'/>
                      <button onClick={() => this.props.addQuantity(item.product)} ><i className="material-icons small bl-btn">add</i></button>
                      <p className="s6 item-ls">{item.product.name}</p>
                    </div>
                    <button onClick={() => this.props.deleteItem(item.product)}><i className="material-icons small del-btn">cancel</i></button>
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