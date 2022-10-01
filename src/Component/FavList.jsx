import React, {Component, useState, useEffect, useCallback} from 'react';
import {useLocation, Link} from 'react-router-dom';
import Recipe from './Recipe';

function FavList (props){
  const {state} = useLocation();
  const [favorites, setFavs] = useState(null);

  
const getFavs = useCallback(event =>{
    //stops page reload
    console.log(process.env.REACT_APP_BACKEND_URL)

    fetch(`${process.env.REACT_APP_BACKEND_URL}`)
        .then(response =>{return response.json()})
        .then(json => setFavs(json),
        (err) => console.log(err))
        .then(console.log(favorites))
})
  
    useEffect(()=>{
        getFavs();   
    },[]);

    return (
        <div>
                    <h1>Favorite list</h1>
        </div>
    )

}


export default FavList