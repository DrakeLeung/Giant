import G from './giant'

import {on, off, trigger, ready} from './event'

const foo = G('#foo')

on(foo, 'eat', (e) => console.log(e.detail))

on(foo, 'click', () => {
  console.log('clicked foo')
  trigger(foo, 'eat', {name: 'peer'})
})

trigger(foo, 'click')

module.exports = G
