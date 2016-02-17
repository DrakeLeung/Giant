import {
  isArray,
  isString
} from '../helper/util'

const nodeToHtmlString = node =>
  node.outerHTML

/**
 * nodeListToHtmlString: convert nodeList to html string
 *
 * @param {nodeList} $nodeList []
 * @return string
 */
const nodeListToHtmlString = nodeList =>
  [...nodeList].reduce((prev, current) => {
    return prev + nodeToHtmlString(current)
  }, '')

/**
 * makeSureHtmlString: convert node/nodeList to html string
 *
 * @param {string/node/nodeList} $valee []
 * @return string
 */
const makeSureHtmlString = value =>
  isString(value)
  ? value
  : !isArray(value)
    ? nodeToHtmlString(value)
    : nodeListToHtmlString(value)

/**
 * insertHtml: insert the given html stirng in the given position
 *
 * @param {element} $element    [insert consider of this element]
 * @param {string}  $position   [beforebegin, afterbegin, beforeend, afterend]
 * @param {string}  $htmlString [html string is about to insert]
 * @return undefined
 */
const insertHtml = (element, position, htmlString) =>
  element.insertAdjacentHTML(
    position, makeSureHtmlString(htmlString)
  )

export const before = (element, htmlString) =>
  insertHtml(element, 'beforebegin', htmlString)

export const prepend = (element, htmlString) =>
  insertHtml(element, 'afterbegin', htmlString)

export const append = (element, htmlString) =>
  insertHtml(element, 'beforeend', htmlString)

export const after = (element, htmlString) => {
  insertHtml(element, 'afterend', htmlString)
}
