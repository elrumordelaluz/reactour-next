import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { safe } from './helpers'

const base = css`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  position: fixed;
  z-index: 99999;
`
const topMaskStyles = ({ elem: { top }, padding = 0 }) => css`
  ${base};
  height: ${safe(top - padding)}px;
`
const TopMask = styled('div')(topMaskStyles)

const rightMaskStyles = ({
  elem: { top, left, width, height },
  doc: { width: docWidth },
  padding = 0,
}) => css`
  ${base};
  top: ${top - padding}px;
  left: ${left + width + padding}px;
  width: ${safe(docWidth - width - left - padding)}px;
  height: ${height + padding * 2}px;
`
const RightMask = styled('div')(rightMaskStyles)

const bottomMaskStyles = ({
  elem: { top, left, height },
  doc: { height: docHeight },
  padding = 0,
}) => css`
  ${base};
  top: ${height + top + padding}px;
  height: ${docHeight + height - top - padding}px;
`
const BottomMask = styled('div')(bottomMaskStyles)

const leftMaskStyles = ({ elem: { top, left, height }, padding }) => css`
  ${base};
  top: ${top - padding}px;
  width: ${safe(left - padding)}px;
  height: ${height + padding * 2}px;
`
const LeftMask = styled('div')(leftMaskStyles)

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
