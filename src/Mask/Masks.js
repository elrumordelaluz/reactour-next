import React from 'react'
import shared from './styles'
import { safe } from '../helpers'

export const TopMask = ({ elem: { top }, padding }) => (
  <div className="mask mask__top">
    <style jsx>{shared}</style>
    <style jsx>{`
      .mask__top {
        height: ${safe(top - padding)}px;
      }
    `}</style>
  </div>
)

export const RightMask = ({
  elem: { top, left, width, height },
  doc: { width: docWidth },
  padding,
}) => (
  <div className="mask mask__right">
    <style jsx>{shared}</style>
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

export const BottomMask = ({
  elem: { top, left, height },
  doc: { height: docHeight },
  padding,
}) => (
  <div className="mask mask__bottom">
    <style jsx>{shared}</style>
    <style jsx>{`
      .mask__bottom {
        top: ${height + top + padding}px;
        height: ${docHeight + height - top - padding}px;
      }
    `}</style>
  </div>
)

export const LeftMask = ({ elem: { top, left, height }, padding }) => (
  <div className="mask mask__left">
    <style jsx>{shared}</style>
    <style jsx>{`
      .mask__left {
        top: ${top - padding}px;
        width: ${safe(left - padding)}px;
        height: ${height + padding * 2}px;
      }
    `}</style>
  </div>
)
