import React, {Component} from 'react';
import NavBar from './components/NavBar.jsx';
import UserProfile from './components/UserProfile.jsx';
import ShowLists from './components/Showlists.jsx';
import ViewList from './components/ViewList.jsx';
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Logout from './components/Logout.jsx'

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      turtles: [],
<<<<<<< HEAD
      currUser: null
=======
      cookies: null,
      testLists: ["Movie Night", "Camping", "Something Healthy"]
>>>>>>> viewList-setup
    };
    this.setCurrUser = this.setCurrUser.bind(this);
  }
  handleThatOneButton() {
    fetch('/turtles').then(d => d.json()).then(b => {
      this.setState({turtles: b.turtles})
    }).catch(err => console.warn(err))
  }

  setCurrUser(user){
    this.setState( {currUser: user} );
  }

<<<<<<< HEAD
  render() {
 // <Route exact path="/register" component={Register} />
=======
    const { testLists } = this.state;

>>>>>>> viewList-setup
    return (
      <Router>
        <div>
          <button onClick={this.handleThatOneButton.bind(this)}>Click this</button>
          {
            this.state.turtles &&
            <table>
              <tbody>
                {this.state.turtles.map(turtle => <tr><td>{turtle}</td></tr>)}
              </tbody>
            </table>
          }

          <div>
            <Route path="/" render={() => <NavBar currUser={this.state.currUser} />} />
          </div>

          <Route path="/user_id" exact={true} render={() => <UserProfile currUser={this.state.currUser} />} />
          <Route path="/user_id/lists" render={() => <ShowLists test={testLists}/>} />
          <Route path="/user_id/list_id" render={() => <ViewList/>} />
          <Route path="/register" render={()=><Register setCurrUser={this.setCurrUser} />}/>
          <Route path="/login" render={()=><Login setCurrUser={this.setCurrUser} /> } />
          <Route path="/logout" render={() => <Logout setCurrUser={this.setCurrUser} />} />

        </div>
      </Router>
    );
  }
}
export default App;
