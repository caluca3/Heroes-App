const { types } = require("../../../src/auth/types/types");


describe('Pruebas en types', () => {
    
    test('No deben cambiar', () => {
       
        const types={
            login:'[Auth] Login',
            logout:'[Auth]Logout',
        }
        expect(types).toEqual({
            login:'[Auth] Login',
            logout:'[Auth]Logout',
        });
    });
 });