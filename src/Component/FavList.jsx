import React, {Component, useState, useEffect, useCallback} from 'react';
import {useLocation, Link} from 'react-router-dom';
import Recipe from './Recipe';

function FavList (props){
  const {state} = useLocation();
  const [favorites, setFavs] = useState(null);
  const [timer, setTimer] =useState(false);
  const [tempFavs, setTempFavs] = useState(null);


  
const getFavs = useCallback(event =>{
    //stops page reload
    console.log(process.env.REACT_APP_BACKEND_URL)

    fetch(`${process.env.REACT_APP_BACKEND_URL}`)
        .then(response =>{return response.json()})
        .then(json => setFavs(json),
        (err) => console.log(err))
        .then(console.log(favorites))
})
        ///Placeholder On recipe page click it set timer. Turns to opposite. On showing this component again it'll see timer had changed and rerun whats in getFavs.
    useEffect(()=>{
        getFavs();   
        // setTimer(false)
        // setTimeout(()=> setTimer(true), 2000);
    },[timer]);

    return (
        <div>
                    <h1>Favorite list</h1>
                    {favorites&&(
                    
                    <ul>
                              {favorites.recipes.map((data,i)=>(
                             
                              <li  recipe={data} key={i} >{data.name}
                              <img src={data.image} alt={data.name} />
                              <Link to={`/favorite`} 
                              onClick={()=> setTimeout(()=> setTimer(timer => !timer), 2000)}
                              className='text-link' 
                              state={{
                                recipe: data
                                                     
                              }} >Recipe</Link>
                             
                              
                              </li>
                            
                             
                            ))}
                            </ul>
                  )}
                  </div>
                      )
                  
                  }


export default FavList