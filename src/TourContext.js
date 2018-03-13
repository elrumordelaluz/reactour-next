import React, { Component, createContext, createRef } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash.uniqueid'

const { Provider, Consumer } = createContext(1)

class TourProvider extends Component {
  state = {
    current: 1,
    steps: [],
  }

  addStep = (key, elem) => {
    this.setState(prevState => ({
      ...prevState,
      steps: {
        ...prevState.steps,
        [key]: elem,
      },
    }))
  }

  removeStep = key => {
    this.setState(prevState => {
      const { [key]: omit, ...rest } = prevState.steps
      return {
        ...prevState,
        steps: rest,
      }
    })
  }

  render() {
    const { children } = this.props
    console.log(this.state)
    const actions = {
      addStep: this.addStep,
      removeStep: this.removeStep,
    }
    return (
      <Provider value={{ context: this.state, actions }}>{children}</Provider>
    )
  }
}

class TourStep extends Component {
  ref = createRef()
  id = ''
  componentDidMount() {
    const { context, actions: { addStep } } = this.props
    const { value } = this.ref
    this.id = uniqueId(`${value.nodeName.toLowerCase()}-`)
    if (value) addStep(this.id, value)
  }

  removeSelf = () => {
    const { actions: { removeStep } } = this.props
    removeStep(this.id)
  }

  componentWillUnmount() {
    this.removeSelf()
  }

  render() {
    const { children, context, actions } = this.props
    return children({
      context,
      actions,
      ref: this.ref,
      removeSelf: this.removeSelf,
    })
  }
}

TourStep.propTypes = {
  children: PropTypes.func.isRequired,
}

class TourConsumer extends Component {
  render() {
    const { children } = this.props
    return (
      <Consumer>
        {({ context, actions }) => (
          <TourStep context={context} actions={actions}>
            {children}
          </TourStep>
        )}
      </Consumer>
    )
  }
}

TourConsumer.propTypes = {
  children: PropTypes.func.isRequired,
}

export { TourProvider, TourConsumer }
