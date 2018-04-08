import React, { PureComponent } from 'react'
import { TourProvider, TourConsumer } from '../index'

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
      <TourProvider
      // customGuide={({ current, total }) => {
      //   return (
      //     <div style={{ backgroundColor: 'white', padding: '10px' }}>
      //       hola ({current + 1}/{total})
      //     </div>
      //   )
      // }}
      >
        <h1>
          Hello World <button onClick={this.toggle}>toggle</button>
        </h1>
        {isShowing && (
          <TourConsumer order={2}>
            {({ ref, removeSelf, actions }) => (
              <p ref={ref} style={{ margin: 0, display: 'inline-block' }}>
                loremipsum <button onClick={removeSelf}>remvoe</button>{' '}
                <button onClick={actions.openTour}>open tour</button>
                <button onClick={actions.closeTour}>close tour</button>
              </p>
            )}
          </TourConsumer>
        )}
        <TourConsumer order={1}>
          {({ ref }) => <input ref={ref} />}
        </TourConsumer>
        <TourConsumer order={0}>
          {({ ref }) => <input ref={ref} defaultValue="aaa" />}
        </TourConsumer>
      </TourProvider>
    )
  }
}

export default App
