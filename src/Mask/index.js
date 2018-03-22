import React from 'react'
import PropTypes from 'prop-types'

import { TopMask, RightMask, BottomMask, LeftMask } from './Masks'

const Mask = ({ onClick, elem, doc, padding }) => {
  const sizeProps = { elem, doc, padding }
  return (
    <div onClick={onClick}>
      <TopMask {...sizeProps} />
      <RightMask {...sizeProps} />
      <BottomMask {...sizeProps} />
      <LeftMask {...sizeProps} />
    </div>
  )
}

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
  padding: 10,
}

export default Mask
