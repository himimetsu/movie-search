const translate = async (word) => {
  let trans = ''
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200502T183210Z.a1be0af551638071.2c5c96f21e02eb3e9e57602385a8ec468ffcb181&text=${word}&lang=ru-en`
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      trans = data.text[0]
    })

  return trans
}
export default translate