/**
 * G: entry function
 *
 * @param {string} $selector [a css selector]
 * @return {Node/NodeList}
 */
const G = (
  selector = ''
) => {
  if (selector === '') return null

  const nodeList = document.querySelectorAll(selector)

  return (nodeList && nodeList.length === 1) ? nodeList[0] : [...nodeList]
}

export default G
