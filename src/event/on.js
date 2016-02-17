/**
 * on: add event listener on an element
 *
 * @param {Elment} $el [an HTML Element]
 * @param {string} $eventName [event name]
 * @param {function} $eventHandler [call the function when the event triggered]
 * @return undefined
 */
const on = (
  el,
  eventName = '',
  eventHandler = () => {}
) => {
  return el.addEventListener(eventName, eventHandler, false)
}

export default on
