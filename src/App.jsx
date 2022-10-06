import React, {Component, Fragment, useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import './App.css';
import Recipe from './Component/Recipe';
import Search from './Component/Search';

function App (props) {
    
    const [urlBase, setUrlBase] = useState('https://www.themealdb.com/api/json/v1/');
    const [query, setQuery] = useState('/search.php?s=');
    const [apiKey, setApiKey] = useState(`${process.env.REACT_APP_API_KEY}`);

   
    return (
      <div>
        <h1>Recipedia!</h1>
          <nav   style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            width: "100%",
          }}>
              <Link to="/" className='text-link' >Home</Link>
              <Link to="/about" className='text-link'  state={
                {apiKey: apiKey}
                }>About</Link>    
              <Link to="/something"  className='text-link' >Something</Link>
              <Link to="/search" className='text-link' state={{
                baseURL: urlBase,
                apiKey: apiKey,
                query: query,
                }}>Search</Link>
                <Link to="/favlist"  className='text-link' >Favorites</Link>
            </nav>
           <Outlet />
           <Route path="/" element={<App />} > 
      </div>
    );
  
    
  }


export default App;
