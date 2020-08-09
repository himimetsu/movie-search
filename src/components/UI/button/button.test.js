import './button.css'
import button from './button'

const res = () => {
  const btn = document.createElement('button')
  btn.className = 'search-btn btn'
  btn.type = 'Submit'
  btn.appendChild(document.createTextNode('Search'))

  return btn
}
describe('Should return', () => {
  it('button', () => {
    expect(button('search-btn', 'submit', 'Search').outerHTML).toBe(res().outerHTML)
  })
})