import { render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MarvelPage } from "../../src/heroes";
import { AppRouter } from "../../src/router/AppRouter";


describe(']Pruebas en AppRouter', () => { 

    test('Debe de mostral el login si no esta loggeado', () => { 
        
        const contextValue = {
            logged: false
        }
        render(
            <MemoryRouter initialEntries={["/marvel"]}>

                <AuthContext.Provider value={contextValue}>
                        <AppRouter/>
                </AuthContext.Provider>
                </MemoryRouter>
        );
       //screen.debug();
        expect(screen.getAllByText('Login')).toBeTruthy();
     });
    test('debe mostar el componente marvel si esta autenticado', () => { 
        const contextValue={
            logged: true
        }
        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={contextValue}>
                    <MarvelPage/>
                </AuthContext.Provider>
            </MemoryRouter>
            );
            expect(screen.getByText('Pagin marvel')).toBeTruthy();
    })

     

     
});