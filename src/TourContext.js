import React, { Component, createContext, createRef } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash.uniqueid'

import Portal from './Portal'
import Mask from './Mask'
import Guide from './Guide'
import { getNodeRect } from './helpers'

const { Provider, Consumer } = createContext(0)

const EMPTY_STEP = '__'

class TourProvider extends Component {
  state = initialState
  guideRef = createRef()

  addStep = ({ key, elem, pos = 0, content = 'aaa' }) => {
    this.setState(prevState => {
      const newSteps =
        prevState.steps.length >= pos
          ? [...prevState.steps]
          : [
              ...prevState.steps,
              ...Array.from(
                new Array(pos - prevState.steps.length),
                () => EMPTY_STEP
              ),
            ]

      return {
        ...prevState,
        entities: {
          ...prevState.entities,
          [key]: {
            elem,
            content,
          },
        },
        steps: [...newSteps.slice(0, pos), key, ...newSteps.slice(pos + 1)],
      }
    })
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

  nextStep = () => {
    this.setState(prevState => {
      const hasNext = prevState.current + 1 < prevState.steps.length
      return {
        current: hasNext ? prevState.current + 1 : prevState.current,
      }
    }, this.calc)
  }

  prevStep = () => {
    this.setState(prevState => {
      const hasPrev = prevState.current - 1 >= 0
      return {
        current: hasPrev ? prevState.current - 1 : prevState.current,
      }
    }, this.calc)
  }

  gotoStep = nextStep => {
    this.setState(prevState => {
      const isValidStep = prevState.steps[nextStep]
      return {
        current: isValidStep ? nextStep : prevState.current,
      }
    }, this.calc)
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
      e.preventDefault()
      this.nextStep()
    }
    if (e.keyCode === 37) {
      // left
      e.preventDefault()
      this.prevStep()
    }
  }

  calc = () => {
    const { entities, steps, current } = this.state
    const currentStep = entities[steps[current]]
      ? entities[steps[current]].elem
      : null
    const { current: guideElem } = this.guideRef

    if (!currentStep) {
      console.log('no step')
      return
    }
    const target = getNodeRect(currentStep)
    const { top, right, bottom, left, ...guide } = getNodeRect(guideElem)
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    const height = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
    const doc = { width, height }

    this.setState({ target, doc, guide })
  }

  render() {
    const { children } = this.props
    const { isOpen, target, doc, guide, current, steps, entities } = this.state
    const actions = {
      addStep: this.addStep,
      removeStep: this.removeStep,
      openTour: this.openTour,
      closeTour: this.closeTour,
      gotoStep: this.gotoStep,
    }

    const currentContent = entities[steps[current]]
      ? entities[steps[current]].content
      : () => {}

    return (
      <Provider value={{ context: this.state, actions }}>
        {children}
        {isOpen && (
          <Portal>
            <Mask elem={target} doc={doc} onClick={this.closeTour} />
            <Guide elem={target} doc={doc} guide={guide} ref={this.guideRef}>
              <Consumer>
                {({ context, actions }) => currentContent({ context, actions })}
              </Consumer>
            </Guide>
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
  guide: {
    width: 0,
    height: 0,
  },
}

class TourStep extends Component {
  ref = createRef()
  id = ''
  componentDidMount() {
    const { context, actions: { addStep }, order: pos, content } = this.props
    const { current } = this.ref
    this.id = uniqueId(`${current.nodeName.toLowerCase()}-`)
    if (current) addStep({ key: this.id, elem: current, pos, content })
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
    const { children, order, content } = this.props
    return (
      <Consumer>
        {({ context, actions }) => (
          <TourStep
            context={context}
            actions={actions}
            order={order}
            content={content}>
            {children}
          </TourStep>
        )}
      </Consumer>
    )
  }
}

TourConsumer.defaultProps = {
  order: 0,
}

TourConsumer.propTypes = {
  children: PropTypes.func.isRequired,
}

export { TourProvider, TourConsumer, EMPTY_STEP }
