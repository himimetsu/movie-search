const showLoader = () => {
  document.getElementsByClassName('loader')[0].classList.remove('hidden-load')
  document.getElementsByClassName('loader')[0].classList.add('hidden-load')
}
export default showLoader