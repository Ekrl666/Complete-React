import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)

//  const fetchMoviesHandler = () => {
//     fetch('https://swapi.dev/api/films')
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       const transformedData = data.results.map(movieData => {
//         return {
//           id: movieData.episode_id,
//           title: movieData.title,
//           releaseDate: movieData.release_date,
//           openingText: movieData.opening_crawl
//         }
//       })
//       setMovies(transformedData)
//     })
//  }

  const fetchMoviesHandler = useCallback (
    async () => {
      setIsLoading(true)
      setError(null)

      try {
        //const response = await fetch('https://swapi.dev/api/films');
        const response = await fetch('https://react-http-54231-default-rtdb.europe-west1.firebasedatabase.app/movies.json');

        if(!response.ok) {
          throw new Error('STH went wrong!!!')
        }
      
        const data = await response.json()
        console.log(data)

        const loadeMovies = []

        for(const key in data) {
          loadeMovies.push({
            id: data[key].name,
            title: data[key].title,
            releaseDate: data[key].releaseDate,
            openingText: data[key].openingText
          })
        }

        setMovies(loadeMovies)
    //     let transformedData = data.results.map(movieData => {
    //             return {
    //               id: movieData.episode_id,
    //               title: movieData.title,
    //               releaseDate: movieData.release_date,
    //               openingText: movieData.opening_crawl
    //             }
    // })
    // setMovies(transformedData)

      } catch (thrownError){
          setError(thrownError.message)
        }
        setIsLoading(false)
      
  }, []
    
  )
  
  const addMovieHandler = async (movie) => {
     const response = await fetch('https://react-http-54231-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
        method:'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
     })
     const data = await response.json()
     console.log(data)
  }

  useEffect(()=> {
    fetchMoviesHandler()
  },[fetchMoviesHandler])
  

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading === false && error && <p>{error}</p>}
        {isLoading === false && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading === false && movies.length === 0 &&  !error &&  <p>No Film Found</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
