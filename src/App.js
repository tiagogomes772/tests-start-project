import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomAdvice } from './Action';

import './App.css';

class App extends Component {
  state = {
    value: "",
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleRandomAdvice = () => {
    this.props.getRandomAdvice();
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>
            Advice:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button onClick={() =>  this.props.getRandomAdvice(this.state.value)}>
          Advice based on input
          </button>
        </div>

        <div className="random">
          <button onClick={this.handleRandomAdvice}> 
            Random Advice
          </button>
        </div>
        <h3>
          {this.props.fetching ?
          <React.Fragment> Is Loading...</React.Fragment> 
           : 
           this.props.advice
          }
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    advice: state.advice.randomAdvice,
    fetching: state.advice.fetching,
  })
};

const mapDispatchToProps = (dispatch) => ({
  getRandomAdvice: (randomAdvice) => {
    dispatch(getRandomAdvice(randomAdvice));  
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
