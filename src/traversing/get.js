import G from '../giant'

export const parent = el =>
  el.parentNode

export const children = el =>
  el.children

export const prev = el =>
  el.previousElementSibling

export const prevAll = el => {
  let result = []
  let prevEl = prev(el)

  while (prevEl) {
    result = [prevEl, ...result]
    prevEl = prev(prevEl)
  }

  return result
}

export const next = el =>
  el.nextElementSibling

export const nextAll = el => {
  let result = []
  let nextEl = next(el)

  while (nextEl) {
    result = [...result, nextEl]
    nextEl = next(nextEl)
  }

  return result
}

G.parent = parent
G.children = children
G.prev = prev
G.prevAll = prevAll
G.next = next
G.nextAll = nextAll
