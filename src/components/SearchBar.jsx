import React, {Component} from 'react';
import {post} from 'axios';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      searchProduct: []
    };

    this.submitHandle = this.submitHandle.bind(this);
  }

  submitHandle(e){
    e.preventDefault();
    var newProduct = e.target[0].value;
    var data = {
        item: newProduct,
    };

    post('/search', data)
      .then(response => {
            return response.data
      }
    )
    .then(products => {
      if(Array.isArray(products)){
        this.setState( { searchProduct: products } );
      } else {
        this.setState( { searchProduct: "No items found" } );
      }
      this.props.addSearchList(products);
    });
  }

  render() {
    return (
      <div>
        <div className="input-field card div-product-input">
          <form onSubmit={this.submitHandle}> 
            <input type="search" className="s6" placeholder="Enter a product" />
            <button type="submit" className="waves-effect waves-light btn-small">Add</button>
          </form>
        </div>
        <div>
          <p>result</p>
          {!Array.isArray(this.state.searchProduct) ? (
            <p>{JSON.stringify(this.state.searchProduct)}</p>
            ) : (
              <ul>
                {this.state.searchProduct.map( (product, index) => {
                  return (<li key={ index }><button onClick={() => this.props.addProduct(product)}>{product.name}</button></li>);
                })}
              </ul>
            )
          }
        </div>
    </div>
    )
  }
}

export default SearchBar;