import './films.css'


export const FilmCard = ({ film }) => {
  return (
      <div>
          <h5>{film.title}</h5>
          <img src={film.src} alt={`${film.title}.jpg`} />
      </div>
  )
}