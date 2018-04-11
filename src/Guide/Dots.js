import React from 'react'
import { dots } from './styles'
import { EMPTY_STEP } from '../TourContext'

const Dots = ({ steps, current, gotoStep }) => (
  <nav className="dots">
    {steps.map((step, index) => (
      <button
        className={`dot ${current === index ? 'current' : ''} ${
          step === EMPTY_STEP ? 'disabled' : ''
        }`}
        key={`${step}_${index}`}
        onClick={() => gotoStep(index)}
      />
    ))}
    <style jsx>{dots}</style>
  </nav>
)

export default Dots
