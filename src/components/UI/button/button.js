import './button.css'

const button = (name, type, text) => {
  const btn = document.createElement('button')
  btn.className = `${name} btn`
  btn.type = type
  btn.appendChild(document.createTextNode(text))

  return btn
}
export default button