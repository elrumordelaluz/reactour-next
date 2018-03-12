import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext(1)

class TourProvider extends Component {
  state = { current: 1 }
  render() {
    const { children } = this.props
    return <Provider value={this.state}>{children}</Provider>
  }
}

class Tour extends Component {
  render() {
    return (
      <TourProvider>
        <Consumer>{({ current }) => <>{current}</>}</Consumer>
      </TourProvider>
    )
  }
}

export default Tour
