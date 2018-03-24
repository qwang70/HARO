import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { history } from './history';
import { Router, Route } from 'react-router-dom';

import  HomePage  from './HomePage/HomePage';
import  LoginPage  from './LoginPage/LoginPage';
// import { RegisterPage } from './RegisterPage';

class App extends Component {
  state = {users: [] }

  componentDidMount() {
    fetch('/ping')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        <br /> 

        <Router history={history}>
          <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              {/* <Route path="/register" component={RegisterPage} /> */}
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
