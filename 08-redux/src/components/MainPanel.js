import React from 'react'

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
    const { addItem } = this.props
    if (this.state.text !== '') {
      addItem(this.state.text)
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
    const { items } = this.props

    console.log(this.props)

    return (
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )
  }
}

const MainPanel = (props) => (
  <div>
    <h1>ToDo!</h1>
    <NewTodo addItem={props.addItem} />
    <TodoList items={props.todo.items} />
  </div>
)

export default MainPanel
