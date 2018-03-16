import React, { Fragment } from 'react'
// import styled from 'styled-components'
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
const topMaskStyles = ({ target: { top }, padding = 0 }) => css`
  ${base};
  height: ${safe(top - padding)}px;
`
const TopMask = styled('div')(topMaskStyles)

const rightMaskStyles = ({
  target: { top, left, width, height },
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
  target: { top, left, height },
  doc: { height: docHeight },
  padding = 0,
}) => css`
  ${base};
  top: ${height + top + padding}px;
  height: ${docHeight + height - top - padding}px;
`
const BottomMask = styled('div')(bottomMaskStyles)

const leftMaskStyles = ({ target: { top, left, height }, padding = 0 }) => css`
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

export default Mask
