import { useFetch } from '../../hooks/index';

export const getFilmsByGenre = ( genero ) => {
    const { data }  = useFetch(); 
    if(data === undefined) return; 
    const { results } = data;
    
    const filmsByGenre = results.filter( film => {
        const genre = film.genres[0].name.toLowerCase();
        return genre === genero.toLowerCase();
    });
    return filmsByGenre;
}   