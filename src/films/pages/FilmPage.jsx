import { useParams } from 'react-router-dom'; 
import { getFilmByTitle } from '../index'; 
import './filmPage.css'

export const FilmPage = () => {
  const { title } = useParams();
  const film = getFilmByTitle(title);

  if(film === undefined)return; 

  const {
      description,
      embedUrls,
      genres,
      image,
      rating,
      release,
  } = film;

  console.log(embedUrls);

  return (
    <video src={embedUrls[2].url}/>
  )
}