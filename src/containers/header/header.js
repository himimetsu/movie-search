import './header.css'

const header = () => {
  const head = document.createElement('header')
  head.classList.add('header')
  const title = document.createElement('h1')
  title.classList.add('title')
  title.appendChild(document.createTextNode('MovieSearch'))
  head.appendChild(title)

  return head
}
export default header