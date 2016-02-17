/**
 * off: remove event listener on an element
 *
 * @param {Elment} $el [an HTML Element]
 * @param {string} $eventName [event name]
 * @param {function} $eventHandler [call the function when the event triggered]
 * @return undefined
 */
const off = (
  el,
  eventName,
  eventHandler
) =>
  el.removeEventListener(eventName, eventHandler)

export default off
