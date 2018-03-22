import pick from 'lodash.pick'

export const safe = sum => (sum < 0 ? 0 : sum)

export const isHoriz = pos => /(left|right)/.test(pos)

export const isOutsideX = (val, windowWidth) => val > windowWidth

export const isOutsideY = (val, windowHeight) => val > windowHeight

export const getNodeRect = node => {
  return pick(node.getBoundingClientRect(), [
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
  ])
}

export const bestPositionOf = positions => {
  return Object.keys(positions)
    .map(p => ({
      position: p,
      value: positions[p],
    }))
    .sort((a, b) => b.value - a.value)
    .map(p => p.position)
}
