//import React from 'react'
import { useState, useEffect } from 'react'
import { getPopularMovies } from './fetch-movies'
import './App.css'
import Header from './Components/header'
import Footer from './Components/footer'
import Menu from './Components/menu'

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  
    getPopularMovies()
    .then((data)=>{
      data.json().then((cartelera)=>{
        //console.log(cartelera)
        setMovies(cartelera.results)
      })
    })

  }, []);

  return (
    
    <>
      <Header />
      <Menu />

      <ul>
      {movies.map((movie, id)=>
          <li key={movie.id}>
          <dl>Title: {movie.title}</dl> 
          <dt>Details: {movie.release_date}</dt>      
          </li> 
  
      )}
     </ul>

      <Footer/>
    </>
  )
 
}

export default App
