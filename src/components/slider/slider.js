import './slider.css'
import loader from '../UI/loader/loader'
import omdb from '../../scripts/omdb'
import slide from './slide/slide'

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
  frag.appendChild(next())
  frag.appendChild(prev())

  return frag
}

const slider = async (name, page) => {
  const divSlider = document.createElement('div')
  divSlider.classList.add('slider')
  const div = document.createElement('div')
  const wrapper = document.createElement('div')
  wrapper.classList.add('swiper-wrapper')
  div.className = 'swiper-container'
  await (await omdb(name, page)).map((item) => {
    wrapper.appendChild(slide(item))

    return true
  })
  div.appendChild(wrapper)
  divSlider.appendChild(div)
  divSlider.appendChild(control())
  divSlider.appendChild(loader())

  return divSlider
}
export default slider