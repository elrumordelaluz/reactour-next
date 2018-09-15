import React, { PureComponent } from 'react'
import {
  TourProvider,
  TourConsumer,
  Container,
  Badge,
  Navigation,
  Context,
} from '../index'
import Demo from './Demo'

const CustomGuide = ({ context, actions, children }) => (
  <Container>
    <Badge>{context.current}</Badge>
    {children}
    <Navigation
      steps={context.steps}
      current={context.current}
      gotoStep={actions.gotoStep}
    />
  </Container>
)

class App extends PureComponent {
  state = {
    isShowing: false,
  }

  toggle = () => {
    this.setState(prevState => ({ isShowing: !prevState.isShowing }))
  }

  openTour = () => {
    this.setState({ isShowing: true })
  }

  render() {
    const { isShowing } = this.state
    console.log({ isShowing })
    return (
      <TourProvider>
        <Context>
          {({ actions, context }) => <Demo openTour={actions.openTour} />}
        </Context>
        <h1>
          Hello World <button onClick={this.toggle}>toggle</button>
        </h1>
        {isShowing && (
          <TourConsumer
            order={2}
            content={({ context, actions }) => (
              <Container>hola que tal ({context.current})</Container>
            )}
          >
            {({ ref, removeSelf, actions }) => (
              <p ref={ref} style={{ margin: 0, display: 'inline-block' }}>
                loremipsum <button onClick={removeSelf}>remvoe</button>{' '}
                <button onClick={actions.openTour}>open tour</button>
                <button onClick={actions.closeTour}>close tour</button>
              </p>
            )}
          </TourConsumer>
        )}
        <TourConsumer
          order={0}
          content={({ context, actions }) => (
            <CustomGuide actions={actions} context={context}>
              Ok, let's start with the name of the Tour that is about to begin.
            </CustomGuide>
          )}
        >
          {({ ref }) => <input ref={ref} />}
        </TourConsumer>
        <TourConsumer order={3} content={() => 'aaa'}>
          {({ ref }) => <input ref={ref} defaultValue="aaa" />}
        </TourConsumer>
        <TourConsumer
          order={4}
          content={({ context, actions }) => (
            <CustomGuide actions={actions} context={context}>
              'aaaa_____aaaa'
            </CustomGuide>
          )}
        >
          {({ ref }) => <input ref={ref} defaultValue="aaaa_____aaaa" />}
        </TourConsumer>
      </TourProvider>
    )
  }
}

export default App
