import on from '../../src/event/on'
import trigger from '../../src/event/trigger'

describe('add event listener', () => {
  const body = document.body
  const handler = (e) => e.target.innerHTML = 'Hello World'

  beforeEach(() => {
    on(body, 'click', handler)
  })

  it('trigger the click event', () => {
    trigger(body, 'click')
    expect(body.innerHTML).toBe('Hello World')
  })
})
