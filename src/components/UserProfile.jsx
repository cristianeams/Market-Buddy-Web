import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class UserProfile extends Component {

  constructor() {
    super();
    this.pageConstruct = this.pageConstruct.bind(this);
  }

  pageConstruct(currState) {
    if(currState){
      return (<p>You are logged in as {currState.name}</p>);
    }
    return (<p>You are not logged in</p>);
  }

  render() {
    // console.log(this.state.currUser);
    console.log(this.props.currUser);
    var page = this.pageConstruct(this.props.currUser);
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="center brand-logo"><i className="material-icons">shopping_cart</i>Market Buddy</a>
              <a href="#" data-target="mobile-demo" className="right sidenav-trigger"><i className="material-icons">more_vert</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li><Link to="/logout">Logout</Link></li>
        </ul>

        <main>
          {/* <!-- Page Layout here --> */}
          <div className="row">
            <div className="col s12 m4 l3" id="left">
              <img src="http://placekitten.com/g/100/100" alt="Placeholder" className="circle responsive-img" />
              <p id="username">{this.props.currUser.name}</p>
              <a className="waves-effect waves-light btn-small">Edit Profile</a>
            </div>

              <div className="col s12 m8 l9" id="right">
                <div className="float-blue">
                  <h5 className="my-lists">My lists</h5>
                  <a className="btn-floating btn-large waves-effect"><i className="material-icons">add</i></a>
                </div>
                <div className="row grid-lists">
                  <div className="card small blue-cl">
                    <div className="card-action">
                      <span className="card-title">Movie snacks</span>
                      <a href="#"><i className="material-icons right">more_vert</i></a>
                    </div>
                  </div>
                <div className="card small blue-cl">
                  <div className="card-action">
                    <span className="card-title">Barbecue</span>
                    <a href="#"><i className="material-icons right">more_vert</i></a>
                  </div>
                </div>
                <div className="card small blue-cl">
                  <div className="card-action">
                    <span className="card-title">Last week</span>
                    <a href="#"><i className="material-icons right">more_vert</i></a>
                  </div>
                </div>
                <div className="card small blue-cl">
                  <div className="card-action">
                    <span className="card-title">Birthday party</span>
                    <a href="#"><i className="material-icons right">more_vert</i></a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="page-footer">
        <h5 className="icon-footer"><i className="material-icons">shopping_cart</i>Market Buddy</h5>
        <p className="footer-copy">© 2018 Market Buddy</p>
      </footer>
      {/* <!--JavaScript at end of body for optimized loading--> */}
    <script type="text/javascript" src="materialize/js/materialize.min.js"></script>
  </div>

   )
  }

}
export default UserProfile;