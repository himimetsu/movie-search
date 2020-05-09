import './main.css'
import result from '../../components/UI/result/result'
import search from '../../components/search/search'
import slider from '../../components/slider/slider'
import virtualKeyboard from '../../components/virtual-keyboard/virtual-keyboard'

const main = async () => {
  const mainTag = document.createElement('main')
  const container = document.createElement('div')
  container.classList.add('container')
  container.appendChild(search())
  container.appendChild(virtualKeyboard())
  container.appendChild(result())
  container.appendChild(await slider('dream', 1))
  mainTag.appendChild(container)
  sessionStorage.setItem('Category', 'dream')
  sessionStorage.setItem('Page', 1)

  return mainTag
}
export default main