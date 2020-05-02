const omdb = async (name, page) => {
  let result = []
  const url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=b3bbe1b3`
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.Search.map((item) => {
        result.push(item)

        return true
      })
    })

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