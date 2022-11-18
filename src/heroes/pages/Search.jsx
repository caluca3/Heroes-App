import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../auth/hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeoresByName } from '../helpers/getHeroesByName';

export const Search = () => {

const navigate = useNavigate()
const location = useLocation()

const {q=''} = queryString.parse(location.search);
const heroes = getHeoresByName(q);

const {searchText, onInputChange} = useForm({
    searchText:q
  });

const showSearch = (q.length ===0);
const showError = (q.length >0) && heroes.length === 0;


  const onSearchSubmit =(e)=>{
    e.preventDefault();

    if (searchText.trim().length <=1) return;

    navigate(`?q=${searchText}`);

  }

  return (
    <>
          <h1>Search</h1>
          <br/>
          <div className="row">
            <div className='col-5'>
                <h3>Searching</h3>
                <hr />
                <form onSubmit={onSearchSubmit} aria-label='form'> 
                  <input 
                    type="text"
                    placeholder='Search a Hero'
                    className='form-control'
                    name='searchText'
                    autoComplete='off'
                    value={searchText}
                    onChange={onInputChange}
                   />
                  <button className='btn btn-outline-primary mt-3'>
                    Search Heroe
                  </button>
                </form>
            </div>
            <div className='col-7'>
                <h3>Result</h3>
                <hr />

                <div aria-label='alert-danger' className='alert alert-primary' 
                style={{display: showSearch?'':'none'}}>
                 <p>Searh a Hereo</p> 
                </div>

                <div aria-label='alert-primary' className='alert alert-danger' style={{display: showError ? '':'none'}}>
                 <b>No results found {q}</b> 
                </div>
                  {
                    heroes.map(hero=>(
                      <HeroCard key={hero.id}{...hero}/>
                    ))
                  }
            </div>
          </div>          
    </>
  )
}
