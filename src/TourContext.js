import React, { Component, createContext, createRef } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash.uniqueid'
import Portal from './Portal'
import Mask from './Mask'
import { getNodeRect } from './helpers'

const { Provider, Consumer } = createContext(0)

class TourProvider extends Component {
  state = initialState

  addStep = (key, elem) => {
    this.setState(prevState => ({
      ...prevState,
      steps: [...prevState.steps, { key, elem }],
    }))
  }

  removeStep = key => {
    const stepToRemove = step => step.key !== key
    this.setState(prevState => ({
      ...prevState,
      steps: prevState.steps.filter(stepToRemove),
    }))
  }

  toggleOpen = () => {
    this.setState(
      prevState => ({
        isOpen: !prevState.isOpen,
      }),
      this.calc
    )
  }

  calc = () => {
    const { steps, current } = this.state
    const currentStep = steps[current]
    const target = getNodeRect(currentStep.elem)
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    const height = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
    const doc = { width, height }

    this.setState({ target, doc })
  }

  render() {
    const { children } = this.props
    const { isOpen, target, doc } = this.state
    const actions = {
      addStep: this.addStep,
      removeStep: this.removeStep,
      toggleOpen: this.toggleOpen,
    }

    return (
      <Provider value={{ context: this.state, actions }}>
        {children}
        {isOpen && (
          <Portal>
            <Mask target={target} doc={doc} />
          </Portal>
        )}
      </Provider>
    )
  }
}

const initialState = {
  current: 0,
  steps: [],
  isOpen: false,
  target: {
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  doc: {
    width: 0,
    height: 0,
  },
}

class TourStep extends Component {
  ref = createRef()
  id = ''
  componentDidMount() {
    const { context, actions: { addStep } } = this.props
    const { current } = this.ref
    this.id = uniqueId(`${current.nodeName.toLowerCase()}-`)
    if (current) addStep(this.id, current)
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
