import './App.css';
import React from 'react';
import SignInScreen from './SignInScreen';
import Booked from './Booked';
import {ChooseHostel} from './ChooseHostel';
import Header from './Header';
import Building from './Building';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Floor from './Floor';
import Success from './Success';

function App() {
  
  return (
    
 
    
    <div >
      <Header />
      
      <header className="App-header">
      <Router>
      <Switch>
          <Route exact path="/" >
            <SignInScreen />
          </Route>
          <Route path="/booked">
            <ChooseHostel />
          </Route>
          <Route path="/dashboard">
            <Booked />
          </Route>
          <Route path="/building">
            <Building />
          </Route>
          <Route path="/floor">
            <Floor />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
    </Router>
      

      </header> 
      {/* <Booked /> */}
      {/* <ChooseHostel /> */}
      {/* <Building /> */}
    </div>
  );
}

export default App;
