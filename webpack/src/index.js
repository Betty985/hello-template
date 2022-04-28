import _ from 'lodash'
import './style.css'
function component() {
  var element = document.createElement('h1')
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', 'ho'], ' ')
  element.classList.add('hello')
  return element
}

document.body.appendChild(component())