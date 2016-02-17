import on from '../../src/event/on'
import off from '../../src/event/off'
import trigger from '../../src/event/trigger'

describe('remove event listener', () => {
  const body = document.body
  const handler = (e) => {
    e.target.insertAdjacentHTML(
      'afterbegin',
      '<div id="foo"> Call Me Foo </div>'
    )
  }

  on(body, 'click', handler)

  it('should be null', () => {
    off(body, 'click', handler)
    trigger(body, 'click')
    expect(document.querySelector('#foo')).toEqual(null)
  })
})
