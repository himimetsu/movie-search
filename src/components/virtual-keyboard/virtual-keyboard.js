import './virtual-keyboard.css'
import keys from './keys'

const renderVirtualKeyboard = () => {
  const keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')
  keyboard.classList.add('hidden')
  for (let key in keys) {
    const row = document.createElement('div')
    row.classList.add('row')
    keyboard.appendChild(row)

    keys[key].map((item) => {
      const note = document.createElement('div')
      note.classList.add('key')
      note.classList.add(item.name)
      row.appendChild(note)

      const rus = document.createElement('span')
      rus.classList.add('rus')
      rus.classList.add('hidden')
      note.appendChild(rus)

      const eng = document.createElement('span')
      eng.classList.add('eng')
      eng.classList.add('show')
      note.appendChild(eng)

      for (let index = 0; index < item.content.length; index += 1) {
        const down = document.createElement('span')
        down.classList.add('down')
        const downText = document.createTextNode(item.content[index].down)
        down.appendChild(downText)

        const up = document.createElement('span')
        up.classList.add('up')
        up.classList.add('hidden')
        const upText = document.createTextNode(item.content[index].up)
        up.appendChild(upText)

        const currentString = [
          rus,
          eng,
        ]
        currentString[index].appendChild(down)
        currentString[index].appendChild(up)
      }
    })
  }

  return keyboard
}

const virtualKeyboard = () => {
  const virtual = document.createDocumentFragment()
  virtual.appendChild(renderVirtualKeyboard())

  return virtual
}
export default virtualKeyboard