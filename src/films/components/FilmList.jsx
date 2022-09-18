import { useFetch } from '../../hooks/index'; 
import { FilmCard } from './FilmCard'; 




export const FilmList = () => {

  
  
  const {data,loading} = useFetch(); 
  if(loading){
    return <h1 style={{color:"white"}}>Loading...</h1>
  }

  const { results } = data; 
  console.table(data)
  return (
    <div className='films-grid'>
      {
        results.map((film) => (
          <FilmCard key={film._id} film={film} />
        ))
      }
    </div>
  )
}