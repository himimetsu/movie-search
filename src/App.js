import 'regenerator-runtime/runtime'
import Swiper from 'swiper'
import addSlides from './scripts/addSlides'
import footer from './containers/footer/footer'
import handling from './scripts/handling'
import header from './containers/header/header'
import main from './containers/main/main'

const render = async () => {
  const body = document.getElementsByTagName('body')[0]
  const frag = document.createDocumentFragment()
  frag.appendChild(header())
  frag.appendChild(await main())
  frag.appendChild(footer())
  body.appendChild(frag)
  handling()
  let swiper = new Swiper('.swiper-container', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observeParents: true,
    observer: true,
    observeSlideChildren: true,
    slidesPerGroup: 1,
    slidesPerView: 4,
    spaceBetween: 20,
  });
  swiper.on('observerUpdate', () => {
    console.log('dom')
  })
  swiper.on('reachEnd', async () => {
    document.getElementsByClassName('loader')[0].classList.remove('hidden-load')
    swiper.appendSlide(await addSlides())
    swiper.update()
    document.getElementsByClassName('loader')[0].classList.add('hidden-load')
  })
}
render()