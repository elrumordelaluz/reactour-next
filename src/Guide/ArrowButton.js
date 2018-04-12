import React from 'react'
import cn from 'classnames'
import { arrow } from './styles'

const ArrowButton = ({ inverted, onClick, disabled }) => (
  <button
    onClick={onClick}
    className={cn('arrow', {
      disabled,
      inverted,
    })}>
    <svg viewBox="0 0 18.4 14.4">
      <path
        d={
          inverted
            ? 'M17 7.2H1M10.8 1L17 7.2l-6.2 6.2'
            : 'M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2'
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
    </svg>
    <style jsx>{arrow}</style>
  </button>
)

export default ArrowButton
