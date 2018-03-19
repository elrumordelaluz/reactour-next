import React, { Component, createContext, createRef } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash.uniqueid'
import update from 'immutability-helper'

import Portal from './Portal'
import Mask from './Mask'
import { getNodeRect } from './helpers'

const { Provider, Consumer } = createContext(0)

class TourProvider extends Component {
  state = initialState

  addStep = (key, elem) => {
    this.setState(prevState => ({
      ...prevState,
      entities: {
        ...prevState.entities,
        [key]: elem,
      },
      steps: [...prevState.steps, key]
    }))
  }

  removeStep = key => {
    this.setState(prevState => {
      const { [key]: omit, ...restEntities } = prevState.entities
      return {
        ...prevState,
        entities: restEntities,
        steps: prevState.steps.filter(k => k !== key),
      }
    })
  }

  toggleOpen = () => {
    this.setState(
      prevState => ({
        isOpen: !prevState.isOpen,
      }),
      this.calc
    )
  }

  openTour = () => {
    this.setState(
      {
        isOpen: true,
      },
      this.onOpenTour
    )
  }

  onOpenTour = () => {
    this.calc()
    window.addEventListener('resize', this.calc, false)
    window.addEventListener('keydown', this.keyDownHandler, false)
  }

  closeTour = () => {
    this.setState({
      isOpen: false,
    })
  }

  onCloseTour = () => {
    window.removeEventListener('resize', this.calc)
    window.removeEventListener('keydown', this.keyDownHandler)
  }

  keyDownHandler = e => {
    e.stopPropagation()
    if (e.keyCode === 27) {
      // esc
      e.preventDefault()
      this.closeTour()
    }
    if (e.keyCode === 39) {
      // right
      console.log('ahjkhk')
      e.preventDefault()
      // this.nextStep()
    }
    if (e.keyCode === 37) {
      // left
      e.preventDefault()
      // this.prevStep()
    }
  }

  calc = () => {
    const { entities, steps, current } = this.state
    const currentStep = entities[steps[current]]

    if (currentStep) {
      const target = getNodeRect(currentStep)
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
  }

  render() {
    const { children } = this.props
    const { isOpen, target, doc } = this.state
    const actions = {
      addStep: this.addStep,
      removeStep: this.removeStep,
      openTour: this.openTour,
      closeTour: this.closeTour,
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
  entities: {},
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
    const { context, actions: { addStep }, order } = this.props
    const { current } = this.ref
    this.id = uniqueId(`${current.nodeName.toLowerCase()}-`)
    if (current) addStep(this.id, current, order)
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
    const { children, order } = this.props
    return (
      <Consumer>
        {({ context, actions }) => (
          <TourStep context={context} actions={actions} order={order}>
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
