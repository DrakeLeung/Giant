import {
  before,
  prepend,
  append,
  after
} from '../../src/manipulation'

describe('dom insertion', () => {
  const body = document.body
  const container = document.createElement('div')
  const foo = '<p id="foo"> Call Me Foo </p>'

  beforeEach(() => {
    body.appendChild(container)
  })

  afterEach(() => {
    body.removeChild(container)
  })

  it('before', () => {
    before(container, foo)

    expect(body.firstElementChild.nodeName).toEqual('P')
    expect(body.children[0].id).toBe('foo')
  })

  it('prepend', () => {
    prepend(container, foo)

    expect(container.children[0].id).toBe('foo')
  })

  it('append', () => {
    append(container, foo)

    expect(container.lastElementChild.id).toEqual('foo')
  })

  it('after', () => {
    after(container, foo)
    expect(body.lastElementChild.id).toEqual('foo')
  })
})
