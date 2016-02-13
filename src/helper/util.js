export const isExist = value =>
  value !== null || value !== void 42

export const isString = value =>
  typeof value === 'string'

export const isNodeList = value =>
  value === '[object NodeList]'

export const isArray = value =>
  Array.isArray(value)
