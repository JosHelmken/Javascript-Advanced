const myTopMovieID = 'tt0120737';
const topYear = 1975;
const topGenre = 'action'



// Movie genre list //
const setMovieGenre = async () => {
  const movieGenreList = document.querySelector('#movieGenreList');
  const movieData = await getMoviesAPI('genre');

  movieData.genres.forEach(movieGenre => {
    const li = document.createElement('li');
    const liContent = document.createTextNode(`genre naam: ${movieGenre.name}, id: ${movieGenre.id}`);
    li.appendChild(liContent);
    movieGenreList.append(li);
    
  });
}
// Favorite movie //
const setFavoriteMovie = async () => {
  const movieData = await getMoviesAPI('mytopmovie');
  const movie = movieData.movie_results[0];
  const getParagraph = document.querySelector('#myTopMovie');

  getParagraph.appendChild(document.createTextNode(movie.title))
}
// top 10 Overall //
const setTopRatedMovie = async () => {
  const movieTopList = document.querySelector('#topRatedMovies');
  const movieData = await getMoviesAPI('toprated');
  const topTen = movieData.results.splice(0, 10)  ;
  topTen.forEach(movie => {
    const li = document.createElement('li');
    const liContent = document.createTextNode(`${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`);
    li.appendChild(liContent);
    movieTopList.appendChild(li);
    })
}
// Top 10 for Action //
const setTopRatedMovieGenre = async () => {
  const movieTopList = document.querySelector('#topRatedMoviesGenre');
  const movieData = await getMoviesAPI('topgenre');
  const topTen = movieData.results.splice(0, 10)  ;
  topTen.forEach(movie => {
    const li = document.createElement('li');
    const liContent = document.createTextNode(`${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`);
    li.appendChild(liContent);
    movieTopList.appendChild(li);
    })
}

// Top 10 for 1975 //
const setTopRatedMovieYear = async () => {
  const movieTopList = document.querySelector('#topRatedMoviesYear');
  const movieData = await getMoviesAPI('topyear');
  const topTen = movieData.results.splice(0, 10)  ;
  topTen.forEach(movie => {
    const li = document.createElement('li');
    const liContent = document.createTextNode(`${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`);
    li.appendChild(liContent);
    movieTopList.appendChild(li);
    })
}









// apply the list // 
document.addEventListener('DOMContentLoaded', () => {
  setMovieGenre();
  setFavoriteMovie();
  setTopRatedMovie();
  setTopRatedMovieGenre()
  setTopRatedMovieYear();
});






