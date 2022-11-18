import { render,screen,fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Search } from "../../../src/heroes/pages/Search";
const mockUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
     useNavigate:()=> mockUseNavigate
     }));
     
describe('Pruebas en <Search/>', () => { 

    beforeEach(()=>{
        jest.clearAllMocks();
    })
    
    test('Debe mostrar correctamente', () => { 
        
            const {container}=render(
                <MemoryRouter>
                    <Search/>
                </MemoryRouter>
            )
            // screen.debug();
            expect(container).toMatchSnapshot();
     });
     test('Muestra el ?q', () => { 
        
        render(<MemoryRouter initialEntries={["/search?q=batman"]}>
                <Search/>
            </MemoryRouter>
        )
            const input = screen.getByRole('textbox');
            expect(input.value).toBe('batman')

            const img = screen.getByRole('img');
            expect(img.getAttribute('src')).toBe('/assets/heroes/dc-batman.jpg');
            
            const div = screen.getByLabelText('alert-danger');
            expect(div.style.display).toBe('none');
        ;})
        
        test('Debe mostrar un error si no se encuentra el heroe (batman123)', () => {
            render(<MemoryRouter initialEntries={["/search?q=batman123"]}>
                    <Search/>
                </MemoryRouter>
            )
            const input = screen.getByRole('textbox');
            expect(input.value).toBe('batman123');

            const div = screen.getByLabelText('alert-primary');
            expect(div.style.display).toBe('');
            screen.debug();
         });

         test('Debe llamar el navigate a la pantalla nueva', () => {
            const valueInput = "superman"
            render(<MemoryRouter  initialEntries={["/search"]}>
                    <Search/>
                </MemoryRouter>
             )
            const input = screen.getByRole('textbox');
            fireEvent.change(input,{target:{name:"searchText",value: valueInput}});
            fireEvent.submit(input);
            //const form=screen.getByRole('form');
            //fireEvent.submit(form);

            expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${valueInput}`); 
            screen.debug();
        });

 });