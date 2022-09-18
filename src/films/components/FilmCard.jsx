import './films.css'


export const FilmCard = ({ film }) => {
  const {
    image,
    title,
    genre,
  } = film;
  
  return (
      <div className='col'>
          <div className='card mt-2 p-2'>
              <div className='row no-gutter'>
                <img className='card-img' src={image} alt={`${title}.jpg`} />
              </div>
              <div className='col-8'>
                  <div className='card-body'>
                      <h5 className=''>{title}</h5>
                  </div>
              </div>
          </div>
      </div>
  )
}