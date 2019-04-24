import React, { Component } from 'react';
import puppies from "./friends.json";
import './App.css';

class App extends Component {

  state = {
    puppies: puppies
  }


  render() {
    return (
      <div>
        <div className="nav">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h3 className="game">Clicky Game</h3>
              </div>
              <div className="col-4">
              </div>
              <div className="col-4">
                <h3>Score: 0 | Top Score: 0</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbo">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Clicky Game!</h1>
                <h4>Click on an image to earn points, but don't click on any more than once!</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="App">
          <div className="container">
            <div className="row">
              {this.state.puppies.map(puppy => (
                <div className="pup-card img-container" key={puppy.id}>
                  <img alt={puppy.name} src={puppy.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
