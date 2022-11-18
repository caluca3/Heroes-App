import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {
    
    test('debe retornar el state por defecto', () => {
        const state = authReducer({logged:false,},{});
        expect(state).toEqual({logged:false})
    })

    test('debe llamar al login y autenticar el user', () => {
        const action ={
            type:types.login,
            payload:{
                name:'carlos',
                id:'123'
            }
        }
        const state = authReducer({logged:false},action)
        expect(state).toEqual({logged:true,
                               user:action.payload});
    })

    test('debe borrar el name del user y logged en false', () => {
        const state ={
            logged:false,
            user:{id:'123',name:'Carlos'}
        }
        const action ={
            type:types.logout
        }
        const newState = authReducer(state,action)
        expect(newState).toEqual({logged:false}) 
    }); 
});     