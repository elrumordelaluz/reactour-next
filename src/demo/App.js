import React, { PureComponent } from 'react'
import Tour, { Bus, Place } from '../index'

class App extends PureComponent {
  state = {
    isShowing: true,
  }

  toggle = () => {
    this.setState(prevState => ({ isShowing: !prevState.isShowing }))
  }

  render() {
    const { isShowing } = this.state
    return (
      <Bus>
        <h1>
          Hello World <button onClick={this.toggle}>toggle</button>
        </h1>
        {isShowing && (
          <Place>
            {({ ref, removeSelf, actions }) => (
              <p ref={ref} style={{ margin: 0, display: 'inline-block' }}>
                loremipsum <button onClick={removeSelf}>remvoe</button>{' '}
                <button onClick={actions.toggleOpen}>TOGGLE</button>
              </p>
            )}
          </Place>
        )}
        <Place>{({ ref }) => <input ref={ref} />}</Place>
      </Bus>
    )
  }
}

export default App
