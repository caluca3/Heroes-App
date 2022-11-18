import { heroes } from "../data/heroesdata"


export const getHeroesById = (id) => {

   return heroes.find(hero => hero.id === id);
}
