import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Counter from './components/Counter.js'

const Hello = ({ firstName, lastName }) => {
  return (<h1>Hello, { firstName } { lastName }</h1>)
}

ReactDOM.render(
  <Counter label="I'm a counter" />,
  document.getElementById('react-root')
)
