import { Routes, Route } from 'react-router-dom'; 
import { HomePage } from '../../UI/index'; 
import { FilmsPage,FilmPage,FilmsByParamsPage,SearchPage } from '../index'

export const FilmsRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/films' element={<FilmsPage/>}/>
        <Route path='/film/:title' element={<FilmPage/>}/>
        <Route path='/genero/:genero' element={ <FilmsByParamsPage/> }/>
        <Route path='/search' element={ <SearchPage/> }/>
    </Routes>
  )
}