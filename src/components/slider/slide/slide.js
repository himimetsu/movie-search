import './slide.css'
import img from './img/default.jpg'

const title = (name, url) => {
  const div = document.createElement('div')
  div.classList.add('title')
  const link = document.createElement('a')
  link.setAttribute('target', '_blank')
  link.setAttribute('href', url)
  link.appendChild(document.createTextNode(name))
  div.appendChild(link)

  return div
}

const poster = (path) => {
  const div = document.createElement('div')
  div.classList.add('poster')
  if (path === 'N/A') {
    div.style = `background:url('${img}')`
  } else {
    div.style = `background:url('${path}')`
  }

  return div
}

const year = (value) => {
  const div = document.createElement('div')
  div.classList.add('year')
  div.appendChild(document.createTextNode(value))

  return div
}

const score = (value) => {
  const div = document.createElement('div')
  div.classList.add('score')
  div.appendChild(document.createTextNode(value))

  return div
}

const slide = (film) => {
  const div = document.createElement('div')
  div.classList.add('swiper-slide')
  div.appendChild(title(film.Title, film.Link))
  div.appendChild(poster(film.Poster))
  div.appendChild(year(film.Year))
  div.appendChild(score(film.Score))

  return div
}
export default slide