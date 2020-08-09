import './footer.css'
import github from './img/github.png'

const school = () => {
  const div = document.createElement('div')
  div.classList.add('school')
  div.appendChild(document.createTextNode('RS School 2020q1'))

  return div
}

const logo = () => {
  const div = document.createElement('div')
  const link = document.createElement('a')
  div.classList.add('logo-git')
  const img = document.createElement('img')
  img.src = github
  link.href = 'https://github.com/himimetsu'
  link.appendChild(img)
  div.appendChild(link)

  return div
}

const linkToGit = () => {
  const link = document.createElement('a')
  link.appendChild(document.createTextNode('himimetsu'))
  link.href = 'https://github.com/himimetsu'

  return link
}

const profile = () => {
  const div = document.createElement('div')
  div.classList.add('profile')
  div.appendChild(logo())
  div.appendChild(linkToGit())

  return div
}

const footer = () => {
  const foot = document.createElement('footer')
  const container = document.createElement('div')
  container.classList.add('container')
  container.appendChild(school())
  container.appendChild(profile())
  foot.appendChild(container)

  return foot
}
export default footer