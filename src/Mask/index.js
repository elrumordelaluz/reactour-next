import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { TopMask, RightMask, BottomMask, LeftMask } from './Masks'

const Mask = props => (
  <Fragment>
    <TopMask {...props} />
    <RightMask {...props} />
    <BottomMask {...props} />
    <LeftMask {...props} />
  </Fragment>
)

Mask.propTypes = {
  padding: PropTypes.number,
  elem: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  doc: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
}

Mask.defaultProps = {
  padding: 0,
}

export default Mask
