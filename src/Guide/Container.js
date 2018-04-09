import React from 'react'
import { basic } from './styles'

const GuideContainer = ({ children }) => (
  <div className="guide">
    {children}
    <style jsx>{basic}</style>
  </div>
)

export default GuideContainer
