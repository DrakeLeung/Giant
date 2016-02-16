import G from './giant'

import './manipulation/insert'
import './traversing/get'

// import jsonp from './ajax/jsonp'
import get from './ajax/get'

get(
  'https://www.reddit.com/r/javascript/top.json'
)
  .then(res => console.log(res))

module.exports = G
