import { useParams } from 'react-router-dom';
import { getFilmsByGenre } from '../index.js'; 

export const FilmsActionPage = () => {
  const { genero } = useParams();
  const films = getFilmsByGenre(genero);
  console.log(films);
  return (
    <h1>actionPage</h1>
  )
}