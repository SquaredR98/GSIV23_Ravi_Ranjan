import React from 'react'
import MovieDetails from '../components/MovieDetails'
import Header from '../components/Header'

const MovieDetailsPage = () => {
  return (
    <div>
      <Header isHomePage={false} />
      <MovieDetails />
    </div>
  )
}

export default MovieDetailsPage