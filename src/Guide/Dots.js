import React from 'react'
import cn from 'classnames'
import { dots } from './styles'
import { EMPTY_STEP } from '../TourContext'

const Dots = ({ steps, current, gotoStep }) => (
  <nav className="dots">
    {steps.map((step, index) => {
      console.log({ index })
      const onClick = () => gotoStep(index)
      return (
        <button
          key={`${step}_${index}`}
          onClick={onClick}
          className={cn('dot', {
            current: current === index,
            disabled: step === EMPTY_STEP,
          })}
        />
      )
    })}
    <style jsx>{dots}</style>
  </nav>
)

export default Dots
