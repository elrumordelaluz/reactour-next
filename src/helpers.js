import pick from 'lodash.pick'

export const safe = sum => (sum < 0 ? 0 : sum)

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
