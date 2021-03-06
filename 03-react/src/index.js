import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
//    this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
//    return (
//      <button onClick={this.increaseCount.bind(this)}>{this.state.count}</button>
//    )
    return (
      <button onClick={e => this.increaseCount(e)}>{this.state.count}</button>
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
