import './header.css'
import header from './header'

const res = () => {
  const div = document.createElement('header')
  div.classList.add('header')
  const title = document.createElement('h1')
  title.classList.add('title')
  title.appendChild(document.createTextNode('MovieSearch'))
  div.appendChild(title)

  return div
}
describe('Should return', () => {
  it('DOM Header witch title', () => {
    expect(header().outerHTML).toBe(res().outerHTML)
  })
})