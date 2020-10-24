const rewritingCategory = (bool, word) => {
  if (bool) {
    if (word) {
      sessionStorage.setItem('Category', word)
    } else {
      sessionStorage.setItem('Category', document.getElementsByClassName('search-input')[0].value)
    }
    sessionStorage.setItem('Page', 1)
    const success = document.getElementsByClassName('search-input')[0].value
    document.getElementsByClassName('result__text')[0].innerText = `Showing results for "${success}"`
  } else {
    const error = document.getElementsByClassName('search-input')[0].value
    document.getElementsByClassName('result__text')[0].innerText = `No results were found for "${error}"`
  }
}

const showResults = (bool, word) => {
  const result = document.getElementsByClassName('result')[0]
  document.getElementsByClassName('loader')[0].classList.add('hidden-load')

  if (bool) {
    rewritingCategory(bool, word)
    result.classList.add('right')
  } else {
    rewritingCategory(bool)
    result.classList.remove('right')
  }
}
export default showResults