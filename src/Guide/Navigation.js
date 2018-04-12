import React from 'react'
import Dots from './Dots'
import ArrowButton from './ArrowButton'
import { nav } from './styles'

const Navigation = ({ steps, current, gotoStep }) => {
  const prevDisabled = current === 0
  const nextDisabled = current === steps.length - 1
  const prevClick = () => gotoStep(current - 1)
  const nextClick = () => gotoStep(current + 1)
  return (
    <div className="nav">
      <ArrowButton disabled={prevDisabled} onClick={prevClick} />
      <Dots steps={steps} current={current} gotoStep={gotoStep} />
      <ArrowButton disabled={nextDisabled} onClick={nextClick} inverted />
      <style jsx>{nav}</style>
    </div>
  )
}

export default Navigation
