import {
  parent,
  children,
  prev,
  prevAll,
  next,
  nextAll
} from '../../src/traversing'

describe('get the dom tree', () => {
  const body = document.body
  const length = 3

  beforeEach(() => {
    const html = [...Array(length)].reduce((prev, current, index) => {
      return prev + `<p id="item-${index}"> Item ${index} </p>`
    }, '')

    body.innerHTML = html
  })

  afterEach(() => {
    body.innerHTML = ''
  })

  it('parent', () => {
    const myParent = parent(document.querySelector('#item-1'))

    expect(myParent).toEqual(body)
  })

  it('children', () => {
    const myChildren = children(body)

    expect(myChildren.length).toEqual(length)
    expect(myChildren[0].id).toEqual('item-0')
  })

  it('prev', () => {
    const item2 = document.querySelector('#item-2')
    const myPrev = prev(item2)

    expect(myPrev.nodeName).toEqual('P')
    expect(myPrev.id).toEqual('item-1')
  })

  it('prevAll', () => {
    const item2 = document.querySelector('#item-2')
    const myPrevAll = prevAll(item2)

    expect(myPrevAll.length).toBe(length - 1)
    expect(myPrevAll[0].id).toEqual('item-0')
  })

  it('next', () => {
    const item0 = document.querySelector('#item-0')
    const myNext = next(item0)

    expect(myNext.nodeName).toBe('P')
    expect(myNext.id).toBe('item-1')
  })

  it('nextAll', () => {
    const item0 = document.querySelector('#item-0')
    const myNextAll = nextAll(item0)

    expect(myNextAll.length).toBe(length - 1)
    expect(myNextAll[0].id).toBe('item-1')
  })
})
