import { Spinner } from 'reactstrap'; 
import { useFetch } from '../../hooks/index'; 
import { FilmCard } from './FilmCard';
import 'bootstrap/dist/css/bootstrap.min.css'; 




export const FilmList = () => {

  
  
  const {data,loading} = useFetch(); 
  console.log(loading);
  if(loading){
    return (
      <div className="d-flex justify-content-center">
        <Spinner className='spinner' color="primary" />
      </div>
    )
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