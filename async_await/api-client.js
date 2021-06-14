const API_KEY = '3874cd62b32574ba9090766619ac3aba';
const baseUrl = 'https://api.themoviedb.org/3';

// Getting the information from the API 

const getMoviesAPI = async keyword => {
  

  switch (keyword) {

    case 'genre' : {
      try {
        const movieEndpoint = baseUrl + '/genre/movie/list?api_key=' + API_KEY;
        const getApi = await fetch(movieEndpoint);
        return await getApi.json();
      } catch (err) {
        console.log(err);
      }
      break;
      }

    case 'mytopmovie' : {
      try {
        if(keyword === 'mytopmovie') {
          keyword = myTopMovieID;
        }
        const movieEndpoint = baseUrl + '/find/' + keyword + '?external_source=imdb_id&api_key=' + API_KEY;
        const getApi = await fetch(movieEndpoint);
        return await getApi.json();
      } catch (err) {
        console.log(err);
      }
      break;
      }

      case 'toprated' : {
        try {
          const movieEndpoint = baseUrl + '/movie/top_rated?api_key=' + API_KEY;
          const getApi = await fetch(movieEndpoint);
          return await getApi.json();
        } catch (err) {
          console.log(err);
        }
        break;
        }

        case 'topgenre' : {
          try {
            if(keyword === 'topgenre') {
              keyword = topGenre;
            }
            const movieEndpoint = baseUrl + '/discover/movie?with_genres' + topGenre + '&sortby_voteaverage.desc&vote_count.gte=2000&api_key=' + API_KEY;
            const getApi = await fetch(movieEndpoint);
            return await getApi.json();
          } catch (err) {
            console.log(err);
          }
          break;
          }

          case 'topyear' : {
            try {
              if(keyword === 'topyear') {
                keyword = topYear;
              }
              const movieEndpoint = baseUrl + '/discover/movie?primary_release_year=' + topYear + '&sortby_voteaverage.desc&vote_count.gte=2000&api_key=' + API_KEY;
              const getApi = await fetch(movieEndpoint);
              return await getApi.json();
            } catch (err) {
              console.log(err);
            }
            break;
            }








    }
    

  }
