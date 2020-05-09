import './result.css'

const result = () => {
  const div = document.createElement('div')
  div.classList.add('result')
  const text = document.createElement('p')
  text.className = 'result__text'
  text.appendChild(document.createTextNode(''))
  div.appendChild(text)

  return div
}
export default result