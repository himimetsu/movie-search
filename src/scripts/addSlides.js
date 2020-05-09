import slider from '../components/slider/slider'

const addSlides = async () => {
  console.log('add')
  sessionStorage.setItem('Page', sessionStorage.getItem('Page') / 1 + 1)
  const newContent = await slider(sessionStorage.getItem('Category'), sessionStorage.getItem('Page') / 1 + 1)
  let arr = Array.from(newContent.childNodes[0].children)

  return arr[0].children
}
export default addSlides