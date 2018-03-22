import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import { safe } from './helpers'

const base = css`
  .mask {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    position: fixed;
    z-index: 99999;
  }
`

const TopMask = ({ elem: { top }, padding }) => (
  <div className="mask mask__top">
    <style jsx>{base}</style>
    <style jsx>{`
      .mask__top {
        height: ${safe(top - padding)}px;
      }
    `}</style>
  </div>
)

const RightMask = ({
  elem: { top, left, width, height },
  doc: { width: docWidth },
  padding,
}) => (
  <div className="mask mask__right">
    <style jsx>{base}</style>
    <style jsx>{`
      .mask__right {
        top: ${top - padding}px;
        left: ${left + width + padding}px;
        width: ${safe(docWidth - width - left - padding)}px;
        height: ${height + padding * 2}px;
      }
    `}</style>
  </div>
)

const BottomMask = ({
  elem: { top, left, height },
  doc: { height: docHeight },
  padding,
}) => (
  <div className="mask mask__bottom">
    <style jsx>{base}</style>
    <style jsx>{`
      .mask__bottom {
        top: ${height + top + padding}px;
        height: ${docHeight + height - top - padding}px;
      }
    `}</style>
  </div>
)

const LeftMask = ({ elem: { top, left, height }, padding }) => (
  <div className="mask mask__left">
    <style jsx>{base}</style>
    <style jsx>{`
      .mask__left {
        top: ${top - padding}px;
        width: ${safe(left - padding)}px;
        height: ${height + padding * 2}px;
      }
    `}</style>
  </div>
)

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
