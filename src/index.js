import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './style.css'
import Counter from './components/Counter.js'

const Hello = ({ firstName, lastName }) => {
  return (<h1>Hello, { firstName } { lastName }</h1>)
}

const render = (Counter) => {
  ReactDOM.render(
    <AppContainer>
      <Counter label="Hello, I'm a counter." />
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render(Counter)

if (module.hot) {
  module.hot.accept('./components/Counter', () => {
    render(Counter)
  })
}
