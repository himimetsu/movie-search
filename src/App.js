import 'regenerator-runtime/runtime'
import Swiper from 'swiper'
import footer from './containers/footer/footer'
import header from './containers/header/header'
import main from './containers/main/main'
import handling from './scripts/handling'
import addSlides from './scripts/addSlides'

const render = async () => {
  const body = document.getElementsByTagName('body')[0]
  const frag = document.createDocumentFragment()
  frag.appendChild(header())
  frag.appendChild(await main())
  frag.appendChild(footer())
  body.appendChild(frag)
  handling()
  let swiper = new Swiper('.swiper-container', {
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiper.on('observerUpdate', () => console.log('dom'))
  swiper.on('reachEnd', async () => {
    swiper.appendSlide(await addSlides())
    swiper.slideTo(6, 400, false)
  })
}
render()