import './input.css'

const input = (info) => {
  const inputTag = document.createElement('input')
  inputTag.className = info[0]
  inputTag.type = info[1]
  if (info[1] === 'image') {
    inputTag.src = info[2]
    inputTag.setAttribute('data-name', info[3])
  } else {
    inputTag.setAttribute('autofocus', true)
    inputTag.placeholder = info[2]
  }

  return inputTag
}
export default input