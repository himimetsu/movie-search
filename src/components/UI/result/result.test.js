import './result.css'
import result from './result'

const res = () => {
  const div = document.createElement('div')
  div.classList.add('result')
  div.innerHTML = '<p class="result__text"></p>'

  return div
}
describe('Should return', () => {
  it('DOM result', () => {
    expect(result().outerHTML).toBe(res().outerHTML)
  })
})