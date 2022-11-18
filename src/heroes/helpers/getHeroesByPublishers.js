
import {heroes} from '../data/heroesdata.js';

export const getHeroesByPublishers = (publisher)=>{

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} No existe este constructor`);
    }
    return heroes.filter(hero=>hero.publisher===publisher);

}