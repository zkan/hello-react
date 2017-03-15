import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({ firstName, lastName }) => {
  return (<h1>Hello, { firstName } { lastName }</h1>)
}

ReactDOM.render(
  <Hello
    firstName="Kan"
    lastName="Ouivirach"
  />,
  document.getElementById('react-root')
)
