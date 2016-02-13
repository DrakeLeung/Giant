import {
  isArray,
  isString
} from '../helper/util'

import G from '../giant'

const nodeToHtmlString = node =>
  node.outerHTML

const nodeListToHtmlString = nodeList =>
  [...nodeList].reduce((prev, current) => {
    return prev + nodeToHtmlString(current)
  }, '')

const makeSureHtmlString = value =>
  isString(value)
  ? value
  : !isArray(value)
    ? nodeToHtmlString(value)
    : nodeListToHtmlString(value)

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

G.before = before
G.prepend = prepend
G.append = append
G.after = after
