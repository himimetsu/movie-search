import './form.css'

const form = (name) => {
  const formTag = document.createElement('form')
  formTag.classList.add(name)

  return formTag
}
export default form