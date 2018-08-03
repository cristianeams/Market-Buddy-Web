import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {post} from 'axios';
import SearchBar from './SearchBar.jsx';
import ListItem from './ListItem.jsx';
import NavBar from './NavBar.jsx';

function searchItem(anArr, target){
    for(var i = 0; i < anArr.length; i++){
        if(anArr[i].name === target){
            return anArr[i];
        }
    }
    return -1;
}

function existInList(anArr, target){
    for(var i = 0; i < anArr.length; i++){
        if(anArr[i].name === target){
            return true;
        }
    }
    return false;
}

class ViewList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          searchProduct: [],
          listProduct: []
        }

        this.addSearchList = this.addSearchList.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.minusQuantity = this.minusQuantity.bind(this);
        this.submitList = this.submitList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }

    // componentWillMount() {
    //     if(!localStorage.user_name){
    //        this.props.history.push({
    //             pathname: '/login'
    //           })
    //     }
    // }

    addSearchList(products){
        if(Array.isArray(products)){
                this.setState( { searchProduct: products } );
        } else {
            this.setState( { searchProduct: "No items found" } );
        }
    }

    addProduct(e){
        e.preventDefault();
        var oldList = this.state.listProduct;
        var newItem = searchItem(this.state.searchProduct, e.target.innerHTML);
        if(existInList(this.state.listProduct, newItem.name)){
            console.log("exists");
            var existingItem = searchItem(this.state.listProduct, newItem.name);
            existingItem.quantity += 1;
            var newList = this.state.listProduct;
            this.setState( { listProduct: newList} );
        } else {
            newItem["quantity"] = 1;
            oldList.push(searchItem(this.state.searchProduct, e.target.innerHTML));
            this.setState( {listProduct: oldList} );
        }
    }

    addQuantity(e){
        e.preventDefault();
       console.log(e.target.parentNode.parentNode.children);
        var addQuantityProduct = searchItem(this.state.listProduct, e.target.parentNode.parentNode.children[3].innerHTML);
        addQuantityProduct.quantity += 1;
        var newList = this.state.listProduct;
        this.setState( { listProduct: newList} );
    }

    minusQuantity(e){
        e.preventDefault();
        var minusQuantityProduct = searchItem(this.state.listProduct,e.target.parentNode.parentNode.children[3].innerHTML);
        if(minusQuantityProduct.quantity > 0){
            minusQuantityProduct.quantity -= 1;
        }
        var newList = this.state.listProduct;
        this.setState( { listProduct: newList} );
    }

    deleteItem(e){
        e.preventDefault();
        var deleteProduct = searchItem(this.state.listProduct, e.target.parentNode.parentNode.children[0].children[3].innerHTML);
        deleteProduct.quantity = 0;
        this.setState( { listProduct: this.state.listProduct } );
    }

    submitList(e){
        e.preventDefault();
        var data = {
            newList: this.state.listProduct
        };

        post('/user_id/list_id', data)
            .then(response => response.data)
            .then(b => console.log(b));
    }

    render() {
        // const addProduct = this.addProduct;
    return (
        <div>
         <NavBar />
         <main>
        <div className="row main-div">
        <div className="col s6 m6 l6" id="left"> 
          <h5 className="list-name">Movie snacks</h5>
          <SearchBar addProduct={this.addProduct} addSearchList={this.addSearchList}/>
          <ListItem listProduct={this.state.listProduct} addQuantity={this.addQuantity} minusQuantity={this.minusQuantity} deleteItem={this.deleteItem}/>
        </div>
          <div className="col s6 m6 l6" id="right"> 
            <div className="store-list">
              <table>
                <thead className="list-titles">
                  <tr className="table-head list-titles">
                    <th className="admin">Store</th>
                    <th className="admin">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Save on Foods</td>
                    <td>34.22</td>
                  </tr>
                  <tr>
                    <td>Canadian Superstore</td>
                    <td>30.89</td>
                  </tr>
                  <tr>
                    <td>Safeway</td>
                    <td>35.87</td>
                  </tr>
                  <tr>
                    <td>Wallmart</td>
                    <td>32.96</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>  

            

           
        
        <h5 className="admin">Movie snacks</h5>
        <img className="map" src="assets/map.png" alt="Map" />
        </div>

      </main>
        <footer className="page-footer">
          <h5 className="icon-footer"><i className="material-icons">shopping_cart</i>Market Buddy</h5>
          <p className="footer-copy">© 2018 Market Buddy</p>
        </footer>
    </div>
    );
  }
}
export default withRouter(ViewList);