import './search.css'
import button from '../UI/button/button'
import clear from '../UI/clear/clear'
import form from '../UI/form/form'
import input from '../UI/input/input'
import keyboard from '../UI/keyboard/keyboard'

const searchField = () => {
  const renderSearch = document.createDocumentFragment()
  const temp = form('search')
  temp.appendChild(input(['search-input', 'text', 'Search movie']))
  temp.appendChild(clear())
  temp.appendChild(keyboard())
  temp.appendChild(button('search-btn', 'submit', 'Search'))
  renderSearch.appendChild(temp)

  return renderSearch
}
export default searchField