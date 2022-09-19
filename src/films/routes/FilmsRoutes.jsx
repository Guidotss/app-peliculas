import { Routes, Route } from 'react-router-dom'; 
import { HomePage } from '../../UI/index'; 
import { FilmsPage,FilmPage,FilmsActionPage,FilmsComedyPage,FilmsAdventurePage,FilmsAnimationPage } from '../index'

export const FilmsRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/films' element={<FilmsPage/>}/>
        <Route path='/film/:title' element={<FilmPage/>}/>
        <Route path='/genero/:genero' element={ <FilmsActionPage/> }/>
        <Route path='/genero/:genero' element={<FilmsComedyPage/>}/>
        <Route path='/genero/:genero' element={<FilmsAdventurePage/>}/>
        <Route path='/genero/:genero' element={<FilmsAnimationPage/>}/>
        <Route path='/genero'/>
    </Routes>
  )
}