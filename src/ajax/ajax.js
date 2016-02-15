import {
  obj2query,
  keys
} from '../helper/util'

/**
 * ajax: send an async request
 *
 * @param {object} $options [some options for the request]
 * @return promise
 */
const ajax = ({
  method = 'GET',
  url = window.location,
  data = {},
  headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
}) => new Promise((resolve, reject) => {
  const req = new XMLHttpRequest()

  req.open(method, url, true)

  // add listeners
  req.addEventListener('load', e => {
    const self = e.target

    if (self.status >= 200 && self.status < 400)
      resolve(self.responseText)
    else
      reject(self.statusText)
  }, false)

  req.addEventListener('error', e => {
    reject(e.target.statusText)
  }, false)

  // set headers
  keys(headers).forEach(key =>
    req.setRequestHeader(key, headers[key])
  )

  // serialize the data
  data = obj2query(data)
  // let formData = new FormData()
  //
  // keys(data).forEach(key => {
  //   formData.append(key, data[key])
  // })

  req.send(data)
})

export default ajax
