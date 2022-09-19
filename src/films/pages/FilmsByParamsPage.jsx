import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap'; 
import { getFilmsByGenre } from '../index.js'; 
import { FilmCard } from '../index'
import { useFetch } from '../../hooks/index';

export const FilmsByParamsPage = () => {
  const { genero } = useParams();
  const films = getFilmsByGenre(genero);

  if(films === undefined) return; 
  
  return (
    <div className='films-grid'>
      {
        films.map((film) => (
          <FilmCard key={film._id} film={film} />
        ))
      }
    </div>
  )
}