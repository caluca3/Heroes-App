import { fireEvent, render,screen} from "@testing-library/react";
import {  MemoryRouter,useNavigate} from "react-router-dom";

import {AuthContext} from "../../src/auth/context/AuthContext"
import { Navbar } from "../../src/ui/components/NavBar";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
     useNavigate:()=> mockUseNavigate
     }));
     
describe('Preubas en componentes NavBar', () => { 
    
    const contextValue={
        logged:true,
        user:{
            name:'Juan'
        },
        logout : jest.fn()
    }
     beforeEach(()=>jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => { 
        
        render( 
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
            )
            expect(screen.getByText('Juan')).toBeTruthy();
        });
        test('Debe llamar el logout', () => {
            render( 
            <MemoryRouter>
            <AuthContext.Provider value={contextValue}>
                <Navbar/>
            </AuthContext.Provider>
        </MemoryRouter>
            )

            const logoutBtn = screen.getByRole('button');
            fireEvent.click(logoutBtn);
            expect(contextValue.logout).toHaveBeenCalled();
            expect( mockUseNavigate).toHaveBeenCalledWith("/login",{"replace":true})

            });
        });