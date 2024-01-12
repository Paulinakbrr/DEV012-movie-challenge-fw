export const getPopularMovies = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI5M2U2Zjk1MmM3NTFiODY0MGMyYWUyNTlmYTBjZCIsInN1YiI6IjY1OTQ0MWY2ZTAwNGE2NmQ2MzE4NTk3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sanuebwEna5JEFnvgsAcOwIbf_B0aiadH-BD9rj9gcg'
        }
      };
      
      return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      
}

