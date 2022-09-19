import './films.css'


export const FilmCard = ({ film }) => {
  const {
    image,
    title,
    genre,
  } = film;
  
  return (
      <div className='col'>
          <div className='card p-2'>
              <div className='row no-gutter'>
                <img className='card-img' src={image} alt={`${title}.jpg`} />
              </div>
              <div className='col-8'>
                  <div className='card-body'>
                    <div className="text-container">
                      <h3 className='card-title'>{title}</h3>
                    </div>
                  </div>
                  <button className='btn btn-outline-warning'>Ver mas...</button>
              </div>
          </div>
      </div>
  )
}