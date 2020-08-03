import showResults from './showResults'
import slider from '../components/slider/slider'
import translate from './getTranslate'

const changeCaseCycle = () => {
  const up = document.getElementsByClassName('up')
  const down = document.getElementsByClassName('down')
  for (let index = 0; index < up.length; index += 1) {
    up[index].classList.toggle('hidden')
    down[index].classList.toggle('hidden')
  }
}

const changeLang = () => {
  const rus = document.getElementsByClassName('rus')
  const eng = document.getElementsByClassName('eng')
  for (let index = 0; index < rus.length; index += 1) {
    rus[index].classList.toggle('hidden')
    eng[index].classList.toggle('hidden')
    rus[index].classList.toggle('show')
    eng[index].classList.toggle('show')
  }
}

const activeClick = (event) => {
  let currentClick = ''
  if (event.target.classList[0] === 'down' || event.target.classList[0] === 'up') {
    currentClick = event.target.parentNode.parentNode
  } else {
    currentClick = event.target
  }
  currentClick.classList.add('active')
  setTimeout(() => {
    currentClick.classList.remove('active')
  }, 200)
}

const sendRequest = async () => {
  const input = document.getElementsByClassName('search-input')[0]
  let word = await translate(input.value)
  const newContent = await slider(word, 1)
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

const specKey = (event) => {
  let input = document.getElementsByClassName('search-input')[0]
  let selectedSymbol = input.selectionStart
  const oneSpace = ' '
  const fourSpace = '    '
  switch (event.target.innerText) {
    case 'Backspace':
      selectedSymbol = input.selectionStart
      if (selectedSymbol > 0) {
        input.value = input.value.substring(0, input.selectionStart - 1) + input.value.substring(input.selectionStart)
        input.focus()
        input.selectionStart = selectedSymbol - 1
        input.selectionEnd = selectedSymbol - 1
      } else {
        input.focus()
      }
      break

    case 'Tab':
      selectedSymbol = input.selectionStart
      input.value = input.value.substring(0, input.selectionStart) + fourSpace + input.value.substring(input.selectionStart)
      input.focus()
      input.selectionStart = selectedSymbol + 4
      input.selectionEnd = selectedSymbol + 4
      break

    case 'CapsLock':
      changeCaseCycle()
      break

    case 'Enter':
      sendRequest()
      break

    case 'Del':
      selectedSymbol = input.selectionStart
      input.value = input.value.substring(0, input.selectionStart) + input.value.substring(input.selectionStart + 1)
      input.focus()
      input.selectionStart = selectedSymbol
      input.selectionEnd = selectedSymbol
      break

    case '__________':
      selectedSymbol = input.selectionStart
      input.value = input.value.substring(0, input.selectionStart) + oneSpace + input.value.substring(input.selectionStart)
      input.focus()
      input.selectionStart = selectedSymbol + 1
      input.selectionEnd = selectedSymbol + 1
      break

    case 'Language':
      changeLang()
      break

    case '◄':
      input.focus()
      input.selectionStart = input.selectionStart - 1
      input.selectionEnd = input.selectionEnd - 1
      break

    case '►':
      input.focus()
      input.selectionStart += 1
      break
  }
}

const typeText = (event) => {
  let input = document.getElementsByClassName('search-input')[0]
  let selectedSymbol = input.selectionStart
  let clickedItem = event.target.classList[0]
  if (clickedItem === 'down' || clickedItem === 'up' || clickedItem === 'key') {
    let currentSymbol = event.toElement.innerText
    if (currentSymbol.length === 1 && currentSymbol !== '◄' && currentSymbol !== '►') {
      input.value = input.value.substring(0, input.selectionStart) + currentSymbol + input.value.substring(input.selectionStart)
      input.focus()
      input.selectionStart = selectedSymbol + 1
      input.selectionEnd = selectedSymbol + 1
    }
  }
}

const handKeyboard = (event) => {
  activeClick(event)
  specKey(event)
  typeText(event)
}
export default handKeyboard