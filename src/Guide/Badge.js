import React from 'react'
import { badge } from './styles'

const Badge = ({ children }) => (
  <div className="badge">
    {children}
    <style jsx>{badge}</style>
  </div>
)

export default Badge
