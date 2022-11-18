import { heroes } from "../data/heroesdata"

export const getHeoresByName = (name="")=>{

    name=name.toLocaleLowerCase().trim();
    if (name.length===0) return[];

    return heroes.filter(
        hero=>hero.superhero.toLocaleLowerCase().includes(name)
    );
}