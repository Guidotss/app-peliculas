import { useFetch } from '../../hooks/index';

export const getFilmsByGenre = (genero) => {
    const { data }  = useFetch(); 
    if(data === undefined) return; 
    const { results } = data;
    console.log(results[0].genres[0].name);
    
}