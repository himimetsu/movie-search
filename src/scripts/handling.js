import slider from '../components/slider/slider'
import translate from './getTranslate'

const reset = () => {
  document.getElementsByClassName('search-input')[0].value = ''
}

const keyboard = () => {
  event.preventDefault()
}

const submit = async () => {
  event.preventDefault()
  const input = document.getElementsByClassName('search-input')[0]
  console.log('trans start')
  let word = await translate(input.value)
  console.log('trans finish')
  // const newContent = await slider(input.value, 1)
  console.log('new start')
  const newContent = await slider(word, 1)
  console.log('new finish')
  const fragment = document.createDocumentFragment()
  Array.from(document.getElementsByClassName('swiper-wrapper')[0].children).map((child) => child.remove())
  Array.from(newContent.childNodes[0].children).map((child) => fragment.appendChild(child))
  document.getElementsByClassName('swiper-wrapper')[0].appendChild(fragment)
}

const handling = () => {
  document.getElementsByClassName('seacrh-clear')[0].addEventListener('click', reset)
  document.getElementsByClassName('search-keyboard')[0].addEventListener('click', keyboard)
  document.getElementsByClassName('search-input')[0]/addEventListener('submit', submit)
}
export default handling