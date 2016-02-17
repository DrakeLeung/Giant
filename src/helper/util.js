export const isExist = value =>
  value !== null || value !== void 42

export const isString = value =>
  typeof value === 'string'

export const isNodeList = value =>
  value === '[object NodeList]'

export const isArray = value =>
  Array.isArray(value)

export const keys = obj =>
  Object.keys(obj)

/**
 * obj2query: convert an object to query string
 *
 * @param {objecct} $obj [data object sent to server]
 * @return string
 */
export const obj2query = obj =>
  keys(obj).reduce((prev, key, i) => {
    const link = i === 0 ? '' : '&'
    return prev + (link + encodeURI(`${key}=${obj[key]}`))
  }, '')
