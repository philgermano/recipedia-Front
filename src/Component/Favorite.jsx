import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import '../App.css'


function Favorite (props){
    //imports information passed from search page
const state = useLocation();
let navigate = useNavigate();
const [recipe, setRecipe] = useState(null)

const getRecipe = () =>{
    //console.log(id)
    fetch(process.env.REACT_APP_BACKEND_URL+ '/' + state.state.recipe_id)
    .then(res =>{return res.json()})
    .then(json => setRecipe(json))
    //.then(console.log(recipe))
   // .then(console.log("recipe here", recipe))
}

const handleDelete =(id) =>{
    fetch(process.env.REACT_APP_BACKEND_URL + '/' + id, {
        method: 'DELETE', 
    })
    }



    useEffect(()=>{
        getRecipe(state.state.recipe_id)  
      
 // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleInStock=(id) =>{
        fetch(process.env.REACT_APP_BACKEND_URL + '/' + id, {
            method: 'PUT',
			body: JSON.stringify(recipe.recipe),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json())
        .then((data) => {
          //console.log("success", data);
          getRecipe()
          })
                }


        const splitInstructions=(string) => {
            const text = string;
            const newText = text.split('\n').map((str, i) => <p key={i}>{str}</p>);
            
            return newText;
          }

//console.log('state',state)
// console.log('state.recipe',state.state.recipe)

   return(
            
        <div id="recipe-card">
             {recipe&&(
                <>
            <div className="recipe-head">
                <h1 className="recipe-title">{recipe.recipe.name}</h1>
                <input className="submit-button" onClick={async ()=>{
            handleDelete(recipe.recipe._id);
            navigate('/favlist')}} type='submit'  value='ⓧ'/> 
            </div>
            <img className="food-picture" src={recipe.recipe.image} alt={recipe.recipe.name}/>
            <h2 className="subtitles">Ingredients</h2>
            <ul className="ingredients-list">
                {recipe.recipe.ingredients.map((data,i)=>(
                data.name &&
                <li key={i}> 
                    <span onClick={async ()=>{
                // console.log('ID', state.state.recipe._id); 
                data.inStock = !data.inStock; 
                handleInStock(recipe.recipe._id);
                }}> {data.inStock ? '✅': '❌'}</span>  {data.measure} {data.name}
                    </li>
                ))}
                    </ul>
            <h2 className="subtitles">Prep</h2>
            <div className="recipe-text">{splitInstructions(recipe.recipe.instructions)}</div>
            
            
           </>
            )}
        </div>
            
    )

}



export default Favorite


//handleInStock(state.state.recipe._id)