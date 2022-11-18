
import { Route, Routes} from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { HeroesRoutes } from '../heroes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

//import { Navbar } from '../ui';
//import {MarvelPage,DcPage } from "../heroes";


export const AppRouter = () => {
  return (
      <>
       <Routes>

          <Route path='/login' element={
            <PublicRouter>
               <LoginPage /> 
            </PublicRouter>
            }/>
   
          <Route path='/*' element={
            <PrivateRouter>
               <HeroesRoutes/>
            </PrivateRouter>
          }/>  
       </Routes>
      </>
     );
  
}
