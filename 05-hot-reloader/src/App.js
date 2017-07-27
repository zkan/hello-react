import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Title = ({text}) => (
  <h2>{text}</h2>
)

class Button extends React.Component {
  state = {
    count: 0
  }

  increaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <button onClick={this.increaseCount}>{this.state.count}</button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title text="Welcome to React" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
      </div>
    );
  }
}

export default App;
