import React, {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';



function Search (props){
  const {state} = useLocation();
  console.log(state);
    //useState stuff
    const [urlBase, setUrlBase] = useState('https://www.themealdb.com/api/json/v1/');
    const [query, setQueryBase] = useState('/search.php?s=');
    const [apiKey, setApiKey] = useState(`${process.env.REACT_APP_API_KEY}`);
  const [searchURL, setURL] = useState(null);
  const [queryDetail, setQuery] = useState('')
  const [recipes, setRecipes] = useState(null)

  

  const handleSubmit = (event) =>{
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
            //.then(console.log(recipes))
            //.then(console.log(this.sendBack))
  
  }

    return (
        <div className='search'>
      
        {/* form for query */}
<form onSubmit={handleSubmit}>
    {/* <label htmlFor="queryDetail">Recipe</label> */}
        <input
          id='queryDetail'
          type='text'
          value={queryDetail}
          onChange={event =>{ setQuery(event.target.value); setURL(urlBase + apiKey + query+ event.target.value) }}
          />
          <input
            type='submit'
            value='Search'
            />
</form>


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

          }}><img src={data.strMealThumb} alt={data.strMeal}/></Link>
          
          </li>
        
         
          ))}
          </ul>
)}
</div>
    )

}


export default Search