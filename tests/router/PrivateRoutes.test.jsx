import { render,screen} from "@testing-library/react";
import {  MemoryRouter,Route,Routes} from "react-router-dom";

import { AuthContext } from "../../src/auth/context/AuthContext";
import {PrivateRouter} from "../../src/router/PrivateRouter";


describe('Pruebas en PrivateRouter', () => {

    test('debe renderizar publicroute si esta logged', () => {
        
        Storage.prototype.setItem = jest.fn();

        const contextValue={
            logged:true,
            user:{
                id:'abc',
                username:'user',
            }
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['search?q=batman']}>

                <PrivateRouter>
                    <h1>Ruta privada</h1>
                </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath","search?q=batman");
     });
});