const omdb = async (name, page) => {
  let result = []
  const url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=b3bbe1b3`
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === 'True') {
        data.Search.map((item) => {
          result.push(item)

          return true
        })
      } else {
        document.getElementsByClassName('result__text')[0].innerText = `No results for ${name}`
      }
    })
    .catch((error) => console.log(error))

  const promisesRating = result.map(async (item) => {
    let link = `https://www.omdbapi.com/?i=${item.imdbID}&apikey=b3bbe1b3`
    await fetch(link)
      .then((res) => res.json())
      .then((data) => {
        item.Link = `https://www.imdb.com/title/${data.imdbID}`
        item.Score = data.imdbRating
      })
  })
  await Promise.all(promisesRating)

  return result
}
export default omdb