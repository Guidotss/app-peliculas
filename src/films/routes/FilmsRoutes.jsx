import { Routes, Route } from 'react-router-dom'; 
import { HomePage } from '../../UI/index'; 
import { FilmsPage,FilmPage } from '../index'

export const FilmsRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/films' element={<FilmsPage/>}/>
        <Route path='/search/:id' element={<FilmPage/>}/>
    </Routes>
  )
}