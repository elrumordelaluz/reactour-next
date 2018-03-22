import React from 'react'
import Badge from './Badge'
import { basic } from './styles'

const GuideBase = ({ current, total, content }) => (
  <div className="guide">
    <Badge text={`${current + 1}/${total}`} />
    ojklj
    <style jsx>{basic}</style>
  </div>
)

export default GuideBase
