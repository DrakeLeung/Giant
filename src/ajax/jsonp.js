import {obj2query} from '../helper/util'
/**
 * jsonp: overcome the cross-domain restrictions
 *
 * @param {string}   $url      [the url of the resource]
 * @param {object}   $data     [data]
 * @param {function} $callback [for cache]
 * @return promise
 */
const jsonp = (
  url = window.location,
  data = {},
  callback = `jsonp_callback_${Math.round(Math.random() * 1000)}`
) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    const query = obj2query(data) !== '' ? ('&' + obj2query(data)) : ''
    script.src = `${url}?callback=${callback}${query}`
    document.querySelector('head').appendChild(script)

    const timeout = 5
    const timeoutId = setTimeout(() => {
      reject(new Error('request timeout'))
    }, timeout * 1000)

    window[callback] = res => {
      delete window[callback]
      script.parentNode.removeChild(script)
      clearTimeout(timeoutId)
      resolve(res)
    }
  })

export default jsonp
