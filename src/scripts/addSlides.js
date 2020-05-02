import slider from '../components/slider/slider'

const addSlides = async () => {
  console.log('add')
  // const newContent = await slider(sessionStorage.getItem('Category'), sessionStorage.getItem('Page') / 1 + 1)
  // sessionStorage.setItem('Page', sessionStorage.getItem('Page') / 1 + 1)
  // const fragment = document.createDocumentFragment()
  // Array.from(newContent.childNodes[0].children).map((child) => fragment.appendChild(child))
  // document.getElementsByClassName('swiper-wrapper')[0].appendChild(fragment)

  sessionStorage.setItem('Page', sessionStorage.getItem('Page') / 1 + 1)
  const newContent = await slider(sessionStorage.getItem('Category'), sessionStorage.getItem('Page') / 1 + 1)
  let arr = Array.from(newContent.childNodes[0].children)
  console.log(arr)

  return arr
}
export default addSlides