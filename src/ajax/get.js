import ajax from './ajax'

export const get = url =>
  ajax({
    url,
    method: 'GET'
  })

export default get
