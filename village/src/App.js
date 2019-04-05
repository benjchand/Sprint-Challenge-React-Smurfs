import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar'

import axios from 'axios';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  

  componentDidMount () {
    console.log ("component has mounted");
    axios
      .get('http://localhost:3333/smurfs')
        .then (res =>{
          // console.log(res);
          this.setState({ smurfs: res.data })
        })

        .catch (err =>{
          console.log(err);

        })
  }

  addSmurf = (newSmurf) => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then((res) => {
      this.setState({ smurfs: res.data })
      this.props.history.push('/')

    })
    .catch((err) =>{
      console.log (err)

    })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <div className="TopNavBar">
            
              <NavBar />
            </div>
          </nav>
          <Route exact path="/smurf-form"
            render={props => (
              <SmurfForm 
              addSmurf = {this.addSmurf}
              />
            )}
          />
          <Route exact path ="/"
            render = {props => (
              <Smurfs 
              smurfs={this.state.smurfs} 
            
              />
            )}
          />

        </div>
      </Router>
    );
  }
}

const AppWithRouter = withRouter(App) ;

export default AppWithRouter;
