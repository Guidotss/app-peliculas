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

  let index = 0; 

  return (
    <>
      <section className='film-page'>
          <div className='row w-100'>
              <div className='col'>
                  <img className='film-page-image' src={image} alt={title} />
              </div>
              <div className='col'>
                  <h3 style={{color:"white"}} >{title}</h3>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <span className='list-item-title'><b>Rating: </b>{rating}</span>
                    </li>
                    <li className='list-group-item'>
                      <span className='list-item-title'><b>Release: </b>{release}</span>
                    </li>
                    <li className='list-group-item'><b>Genre: </b>{genres[0].name}</li>
                    <li>
                      <div className='col-10'>
                        <h3 className='mt-2' style={{color:"white"}}>Description</h3>
                        <p className='mt-2' style={{color:"white"}}>{description}</p>
                      </div>
                    </li>
                  </ul>
              </div>
              <div className='col'>
                  <iframe src={embedUrls[3].url} frameborder="0"></iframe>
              </div>
          </div>
      </section>
    </>
  )
}