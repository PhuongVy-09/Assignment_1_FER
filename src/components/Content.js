import React from 'react'
import { Film } from '../List/ListOfFIlm'

export default function Content() {
  const [movie, setFilm] = useState([])
  return (
    <div className='container'>
      {Film.map((movie) => (
        <div className='column' key={movie.id}>
          <div className='card'>
            <img src={movie.image} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <p>{movie.nation}</p>
            <p><button>Movie detail</button></p>
          </div>
        </div>
      )
      )
      }

    </div>
  )
}