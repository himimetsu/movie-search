import './keyboard.css'
import img from './keyboard.png'

const keyboard = () => {
  const div = document.createElement('div')
  div.className = 'search-keyboard tooltip'
  const image = document.createElement('img')
  image.src = img
  div.appendChild(image)

  return div
}
export default keyboard