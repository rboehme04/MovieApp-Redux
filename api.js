const processMovieData = movie => ({
    id: movie.imdbID ,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
    actors: movie.Actors,
    description: movie.Plot,
    rating: movie.imdbRating,
})

export const fetchMovies = async (title) => {

    const response = title != null ?
        await fetch(`http://www.omdbapi.com/?apikey=b86e0541&type=movie&s=${title}`) :
        await fetch(`http://www.omdbapi.com/?apikey=b86e0541&type=movie&s=Star%20Wars`)

    //get key {Search}
    const {Search} = await response.json()
    if (Search != undefined){
        return Search.map(processMovieData)
    }
    return null
}

export const fetchMovieDetail = async (title) => {

    const newtitle = title.replace(/ /g, "+")

    const response = await fetch(`http://www.omdbapi.com/?apikey=b86e0541&t=${newtitle}&plot=full`)

    //get key {Search}
    const Title = await response.json()
    if (Title != undefined){
        return processMovieData(Title)
    }
    return null
}