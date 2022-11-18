import { render,screen} from "@testing-library/react";
import {  MemoryRouter,Route,Routes} from "react-router-dom";

import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRouter }  from "../../src/router/PublicRouter";


describe('Pruebas en publicRoutes', () => {

    test('debe renderizar publicroute', () => {
        
        const contextValue={
            logged:false
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRouter>
                    <h1>Ruta publica</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );
        expect(screen.getAllByText('Ruta publica')).toBeTruthy();
     });

     test('debe navegar si esta logeado', () => {
        
        const contextValue={
            logged:true,
            user:{
                name:'Maria',
                id:'1234'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter  initialEntries={['/login']}>
                    
                    <Routes>
                        <Route path='login' element={
                            <PublicRouter>
                                <h1>Ruta publica</h1>
                            </PublicRouter>
                        }/>
                        <Route path='marvel' element={<h1>Pagina marvel</h1>}/>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.debug();
        expect(screen.getByText('Pagina marvel')).toBeTruthy();
     });
});