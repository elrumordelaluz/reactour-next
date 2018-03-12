import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

class Portal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}

Portal.propTypes = {
  parentSelector: PropTypes.func,
}

Portal.defaultProps = {
  parentSelector() {
    return document.body
  },
}

export default Portal
