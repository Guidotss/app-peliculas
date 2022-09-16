import { Routes, Route } from 'react-router-dom'; 
import { HomePage } from '../../UI/index'; 
import { FilmsPage,FilmPage,FilmsActionPage,FilmsComedyPage,FilmsAdventurePage,FilmsAnimationPage } from '../index'

export const FilmsRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/films' element={<FilmsPage/>}/>
        <Route path='/search/:id' element={<FilmPage/>}/>
        <Route path='/gender/action' element={ <FilmsActionPage/> }/>
        <Route path='/gender/comedy' element={<FilmsComedyPage/>}/>
        <Route path='/gender/adventure' element={<FilmsAdventurePage/>}/>
        <Route path='/gender/animation' element={<FilmsAnimationPage/>}/>
        <Route path='/gender'/>
    </Routes>
  )
}