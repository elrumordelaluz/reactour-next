import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { isHoriz, bestPositionOf, isOutsideX, isOutsideY } from '../helpers'
import styles from './styles'

const Guide = forwardRef(
  (
    {
      elem: { top, right, bottom, left, width, height },
      doc: { width: docWidth, height: docHeight },
      guide: { width: guideWidth, height: guideHeight },
      position,
      padding,
      children,
    },
    ref
  ) => {
    const available = {
      left,
      right: docWidth - right,
      top,
      bottom: docHeight - bottom,
    }

    const couldPositionAt = position => {
      return (
        available[position] >
        (isHoriz(position)
          ? guideWidth + padding * 2
          : guideHeight + padding * 2)
      )
    }

    const autoPosition = coords => {
      const positionsOrder = bestPositionOf(available)
      for (let j = 0; j < positionsOrder.length; j++) {
        if (couldPositionAt(positionsOrder[j])) {
          return coords[positionsOrder[j]]
        }
      }
      return coords.center
    }

    const pos = position => {
      const outsideY = top + guideHeight > docHeight
      const hX = isOutsideX(left + guideWidth, docWidth)
        ? isOutsideX(right + padding, docWidth)
          ? right - guideWidth
          : right - guideWidth + padding
        : left - padding
      const hY = isOutsideY(top + guideHeight, docHeight)
        ? isOutsideY(bottom + padding, docHeight)
          ? bottom - guideHeight
          : bottom - guideHeight + padding
        : top - padding
      const coords = {
        top: [hX, top - guideHeight - padding * 2],
        right: [right + padding * 2, hY],
        bottom: [hX, bottom + padding * 2],
        left: [left - guideWidth - padding * 2, hY],
        center: [
          docWidth / 2 - guideWidth / 2,
          docHeight / 2 - guideHeight / 2,
        ],
      }
      if (position === 'center' || couldPositionAt(position)) {
        return coords[position]
      }
      return autoPosition(coords)
    }

    const p = pos(position)

    return (
      <div className="guide" ref={ref}>
        {children}
        <style jsx>{styles}</style>
        <style jsx>{`
          .guide {
            transform: translate(${p[0]}px, ${p[1]}px);
          }
        `}</style>
      </div>
    )
  }
)

Guide.propTypes = {
  padding: PropTypes.number,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'center']),
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
  guide: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
}

Guide.defaultProps = {
  padding: 10,
  position: 'right',
}

export { default as Badge } from './Badge'
export { default as GuideBase } from './GuideBase'

export default Guide
