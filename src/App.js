import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Login from './Login';
import Signup from './Signup';
import { BrowserRouter, Route , Link} from 'react-router-dom'



/*const App = () => {
  return (<div className="App">hello I'm App!!</div>);
};*/
class App extends Component {
  render() {
    return ( 
    <BrowserRouter>
      <div className="App">
     
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <h4><Link to="/login">Welcome to Archivara</Link></h4>
      </div>
      </BrowserRouter>
       
    );
  };
}


export default App;
