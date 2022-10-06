import React, {Component, useState, useEffect, useCallback} from 'react';
import {useLocation, Link} from 'react-router-dom';
import Recipe from './Recipe';


function Search (props){
  const {state} = useLocation();
  console.log(state);
    //useState stuff
  const [searchURL, setURL] = useState('');
  const [queryDetail, setQuery] = useState('')
  const [recipes, setRecipes] = useState(null)
  const handleChange = (event) =>{
    setQuery({[event.target.id]: event.target.value})
  }

  const handleSubmit = useCallback(event =>{
    //stops page reload
    event.preventDefault();
       //assembles search URL
  // setURL(
  //   state.baseURL + state.apiKey + state.query+ queryDetail);
   
  
      //FETCH request stuff 
      fetch(searchURL)
            .then(response =>{return response.json()})
            .then(json => setRecipes(json),
            (err) => console.log(err))
            .then(console.log(recipes))
            //.then(console.log(this.sendBack))
  
  })

    return (
        <div className='favlist'>
      
        {/* form for query */}
<form onSubmit={handleSubmit}>
    {/* <label htmlFor="queryDetail">Recipe</label> */}
        <input
          id='queryDetail'
          type='text'
          value={queryDetail}
          onChange={event =>{ setQuery(event.target.value); setURL(state.baseURL + state.apiKey + state.query+ event.target.value) }}
          />
          <input
            type='submit'
            value='Search'
            />
</form>
<h2>{state.searchURL}</h2>

            {/* <a href={searchURL}>{searchURL}</a> */}
            
                      {recipes&&(
                    
<ul>
          {recipes.meals.map((data,i)=>(
         
          <li  recipe={data} key={i} >
            <Link to={`/recipe`} className='text-link' 
          state={{
              recipe: data

          }}>{data.strMeal}</Link>
          <Link to={`/recipe`} className='text-link' 
          state={{
              recipe: data

          }}><img src={data.strMealThumb}/></Link>
          {/* <Link to={`/recipe`} className='text-link' 
          state={{
              recipe: data

          }}>Recipe</Link> */}
          </li>
        
         
          ))}
          </ul>
)}
</div>
    )

}


export default Search