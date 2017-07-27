import React, { Component } from 'react'

class NewTodo extends React.Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnClick = () => {
    const { addNewItem } = this.props
    if (this.state.text !== '') {
      addNewItem(this.state.text)
      this.setState({
        text: ''
      })
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleOnClick}>Add</button>
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    const { todos } = this.props

    return (
      <ul>
        {todos.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )
  }
}

class App extends Component {
  state = {
    items: [
      'Say hello',
      'Kill Mils',
    ]
  }

  addNewItem = (item) => {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>ToDo!</h1>
        <NewTodo addNewItem={this.addNewItem} />
        <TodoList todos={this.state.items} />
      </div>
    );
  }
}

export default App
