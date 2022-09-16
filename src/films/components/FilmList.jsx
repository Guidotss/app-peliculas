import { useFetch } from '../../hooks/index'; 
import { FilmCard } from './FilmCard'; 




export const FilmList = () => {
  
  const {data,loading} = useFetch(); 
  if(loading){
    return <h1>Loading...</h1>
  }

  const {} = data;

  return (
    <>
    </>
  )
}