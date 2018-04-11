import React, { PureComponent } from 'react'
import { TourProvider, TourConsumer, Container, Badge, Dots } from '../index'

const CustomGuide = ({ context, actions, children }) => (
  <Container>
    <Badge>{context.current}</Badge>
    {children}
    <Dots
      steps={context.steps}
      current={context.current}
      gotoStep={actions.gotoStep}
    />
  </Container>
)

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
      <TourProvider>
        <h1>
          Hello World <button onClick={this.toggle}>toggle</button>
        </h1>
        {isShowing && (
          <TourConsumer
            order={5}
            content={({ context, actions }) => (
              <Container>hola que tal ({context.current})</Container>
            )}>
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
          order={1}
          content={({ context, actions }) => (
            <CustomGuide actions={actions} context={context}>
              ciao ciao
            </CustomGuide>
          )}>
          {({ ref }) => <input ref={ref} />}
        </TourConsumer>
        <TourConsumer order={0} content={() => 'aaa'}>
          {({ ref }) => <input ref={ref} defaultValue="aaa" />}
        </TourConsumer>
        <TourConsumer
          order={4}
          content={({ context, actions }) => (
            <CustomGuide actions={actions} context={context}>
              'aaaa_____aaaa'
            </CustomGuide>
          )}>
          {({ ref }) => <input ref={ref} defaultValue="aaaa_____aaaa" />}
        </TourConsumer>
      </TourProvider>
    )
  }
}

export default App
