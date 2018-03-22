import React from 'react'
import { badge } from './styles'

const Badge = ({ text }) => (
  <div className="badge">
    {text}
    <style jsx>{badge}</style>
  </div>
)

export default Badge
