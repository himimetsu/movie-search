const rewritingCategory = (bool, word) => {
  if (bool) {
    if (word) {
      sessionStorage.setItem('Category', word)
    } else {
      sessionStorage.setItem('Category', document.getElementsByClassName('search-input')[0].value)
    }
    sessionStorage.setItem('Page', 1)
    const category = sessionStorage.getItem('Category')
    document.getElementsByClassName('result__text')[0].innerText = `Showing results for "${category}"`
  } else {
    const error = document.getElementsByClassName('search-input')[0].value
    document.getElementsByClassName('result__text')[0].innerText = `No results for "${error}"`
  }
}

const showResults = (bool, word) => {
  const result = document.getElementsByClassName('result')[0]
  if (bool) {
    rewritingCategory(bool, word)
    result.classList.add('right')
  } else {
    rewritingCategory(bool)
    result.classList.remove('right')
  }
}
export default showResults