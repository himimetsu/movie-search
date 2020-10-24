import handKeyboard from './handKeyboard'
import showResults from './showResults'
import slider from '../components/slider/slider'

const reset = () => {
  document.getElementsByClassName('search-input')[0].value = ''
}

const keyboard = (event) => {
  event.preventDefault()
  document.getElementsByClassName('keyboard')[0].classList.toggle('hidden')
}

const submit = async (event) => {
  event.preventDefault()
  const input = document.getElementsByClassName('search-input')[0]
  if (input.value.length > 0) {
    document.getElementsByClassName('loader')[0].classList.remove('hidden-load')
  }
  const newContent = await slider(input.value, 1)
  if (Array.from(newContent.childNodes[0].childNodes[0].children).length > 0) {
    const fragment = document.createDocumentFragment()
    Array.from(document.getElementsByClassName('swiper-wrapper')[0].children).map((child) => child.remove())
    Array.from(newContent.childNodes[0].childNodes[0].children).map((child) => fragment.appendChild(child))
    document.getElementsByClassName('swiper-wrapper')[0].appendChild(fragment)
    showResults(true)
  } else {
    showResults(false)
  }
}

const handling = () => {
  sessionStorage.setItem('Category', 'dream')
  showResults(true, 'dream')
  document.getElementsByClassName('seacrh-clear')[0].addEventListener('click', reset)
  document.getElementsByClassName('search-keyboard')[0].addEventListener('click', keyboard)
  document.getElementsByClassName('search')[0].addEventListener('submit', submit)
  document.getElementsByClassName('keyboard')[0].addEventListener('click', (event) => handKeyboard(event))
}
export default handling