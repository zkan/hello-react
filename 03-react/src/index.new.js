import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => (
  <div>
    <h1>Hello, React!</h1>
    <Button />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
