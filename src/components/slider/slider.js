import './slider.css'
import omdb from '../../scripts/omdb'
import slide from './slide/slide'

const pagination = () => {
  const div = document.createElement('div')
  div.classList.add('swiper-pagination')

  return div
}

const next = () => {
  const div = document.createElement('div')
  div.classList.add('swiper-button-next')

  return div
}

const prev = () => {
  const div = document.createElement('div')
  div.classList.add('swiper-button-prev')

  return div
}

const control = () => {
  const frag = document.createDocumentFragment()
  frag.appendChild(pagination())
  frag.appendChild(next())
  frag.appendChild(prev())

  return frag
}

const slider = async (name, page) => {
  const div = document.createElement('div')
  const wrapper = document.createElement('div')
  wrapper.classList.add('swiper-wrapper')
  div.className = 'swiper-container'
  await (await omdb(name, page)).map((item) => {
    wrapper.appendChild(slide(item))
  })
  div.appendChild(wrapper)
  div.appendChild(control())

  return div
}
export default slider