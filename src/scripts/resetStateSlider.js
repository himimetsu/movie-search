const resetSlider = () => {
  document.getElementsByClassName('swiper-slide-prev')[0].classList.remove('swiper-slide-prev')
  document.getElementsByClassName('swiper-slide-active')[0].classList.remove('swiper-slide-active')
  document.getElementsByClassName('swiper-slide-next')[0].classList.remove('swiper-slide-next')
}
export default resetSlider