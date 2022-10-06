import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import './index.css';

import About from './routes/about'
import Search from './Component/Search';
import Recipe from './Component/Recipe';
import FavList from './Component/FavList';
import Favorite from './Component/Favorite';
import Phil from './routes/Phil';
import Carlos from './routes/Carlos';
import Clara from './routes/Clara';

function App (props) {
    const [urlBase, setUrlBase] = useState('https://www.themealdb.com/api/json/v1/');
    const [query, setQuery] = useState('/search.php?s=');
    const [apiKey, setApiKey] = useState(`${process.env.REACT_APP_API_KEY}`);
    const location = useLocation()
   
    return (
      <div className='top-content'>
        <h1 id="title"><a href="/search">Recipedia!</a></h1>
          <nav   style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
              <Link to="/search" className={location.pathname==='/search'?'home_active':'home_inactive'} state={{
                baseURL: urlBase,
                apiKey: apiKey,
                query: query,
                }}>Search</Link>
                <Link to="/favlist"  className={location.pathname==='/favlist'?'home_active':'home_inactive'} >Favorites</Link>
                <Link to="/about" className={location.pathname==='/about'?'home_active':'home_inactive'}  state={
                {apiKey: apiKey}
                }>About</Link>    
            </nav>
           <Outlet />
      </div>
    );
  
    
  }


export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} > 
      {/* <Route path="/" element={<Navigate replace to="search" />}  />  */}
      <Route path="about"  element={<About  />} >
      <Route path="phil"  element={<Phil />} />
      <Route path="carlos"  element={<Carlos  />} />
      <Route path="clara"  element={<Clara />} />
      </Route>
       <Route path="search" element={<Search />} />
       <Route path="recipe" element={<Recipe />}/>
       <Route path="favlist" element={<FavList />} />
       <Route path="favorite" element={<Favorite />} />
       <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Route>
    </Routes>
  </BrowserRouter>
  
);
