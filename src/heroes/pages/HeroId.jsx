
import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers';
//import '../Styles/HeroCard.css';

export const HeroId = () => {

    const { id } = useParams();
    
    const hero = useMemo(() => getHeroesById(id), [id]);


    const navigate = useNavigate();

    if (!hero) {
        return <Navigate to="/dc" />;
    }

    const onNavigateBack = () => {
      navigate(-1);  

    }

    if ( !hero ) {
      return <Navigate to="/dc"/>
    }
    
    return (<>
      <div className="card">
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src={ `/assets/heroes/${ id }.jpg` } 
            alt={ hero.superhero }
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
  
        <div className="col-8">
          <h1>{ hero.superhero }</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego } </li>
            <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>
            <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance } </li>
          </ul>
  
          <h5 className="mt-3"> Characters </h5>
          <p>{ hero.characters }</p>
  
          <button 
            className="btn btn-outline-warning mt-3"
            onClick={ onNavigateBack }
          >
           ← Back
          </button>
  
        </div>
      </div>
      </div>
    </>
    ); 
  }

