import './clear.css'
import img from './clear.svg'

const clear = () => {
  const div = document.createElement('div')
  div.className = 'seacrh-clear tooltip'
  const image = document.createElement('img')
  image.src = img
  div.appendChild(image)

  return div
}
export default clear