import React, { useMemo } from 'react';
import { getHeroesByPublishers } from '../helpers/getHeroesByPublishers';
import {HeroCard}from './HeroCard';

export const HeroLista = ({publisher}) => {
  const heroes= useMemo(() => getHeroesByPublishers(publisher), [publisher]);

  return (
    <>
       <div className='row rows-cols-1 row-cols-md-3 g-3'>
         
          {
          heroes.map(hero => (
            <HeroCard key={hero.id}
             {...hero} />
          ))
        }
        </div>    
    </>
  )
}
