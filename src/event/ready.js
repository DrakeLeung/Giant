/**
 * ready:  initial HTML document has been completely loaded and parsed,
 * without waiting for stylesheets, images, and subframes to finish loading
 *
 * @param {function} $fn [callback]
 * @return undefined
 */
const ready = (fn) => {
  if (document.readyState !== 'loading') fn()
  else document.addEventListener('DOMContentLoaded', fn, false)
}

export default ready
