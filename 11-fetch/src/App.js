import React, { Component } from 'react'

class Avgle extends Component {
  state = {
    titles: []
  }

  componentDidMount() {
    fetch('https://api.avgle.com/v1/videos/0?limit=5')
      .then((response) => response.json())
      .then((responseJson) => {
        const videos = responseJson.response.videos
        const newState = videos.map((video) => video.title)
        this.setState({
          titles: newState
        })
      })
  }

  render() {
    return (
      <ul>
        {this.state.titles.map((title, i) => <li key={i}>{title}</li>)}
      </ul>
    )
  }
}

const App = () => (
  <Avgle />
)

export default App
