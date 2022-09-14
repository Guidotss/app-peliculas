import { Routes,Route } from 'react-router-dom';
import { FilmsRoutes } from '../films/routes/FilmsRoutes';
import { NavBar } from '../UI/index';

export const AppRouter = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/*'  element={ < FilmsRoutes/> }/>
      </Routes>
    </>
  )
}