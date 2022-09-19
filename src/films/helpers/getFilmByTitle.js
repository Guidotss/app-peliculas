import { useFetch } from '../../hooks/index'; 

export const getFilmByTitle = ( title ) => {
    const { data } = useFetch();

    if(data === undefined)return; 

    const { results } = data; 

    const film = results.find(film => film.title === title);
    return film;
}