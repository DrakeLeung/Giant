import ajax from './ajax'

const post = (url, data) =>
  ajax({
    url,
    data,
    method: 'POST'
  })

export default post
