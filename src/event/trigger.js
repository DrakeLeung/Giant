/**
 * trigger: manually trigger an event
 *
 * @param {Elment} $el [an HTML Element]
 * @param {string} $eventName [event name]
 * @param {object/string} $data [save the data in e.detail property]
 * @return undefined
 */
const trigger = (
  el,
  eventName,
  data = void 42
) => {
  const event = new CustomEvent(eventName, {detail: data})
  el.dispatchEvent(event)
}

export default trigger
