import React, {Component, useState, useReducer} from 'react'
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import '../App.css'


function Favorite (props){
    //imports information passed from search page
const state = useLocation();
let navigate = useNavigate();
const [recipe, setRecipe] = useState(null)
const [_, forceUpdate] = useReducer((x) => x + 1, 0);

const handleDelete =(id) =>{
    fetch(`${process.env.REACT_APP_BACKEND_URL}` + '/' + id, {
        method: 'DELETE', 
    })
    }

    const handleInStock=(id) =>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}` + '/' + id, {
            method: 'PUT',
			body: JSON.stringify(state.state.recipe),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json())
        .then((data) => {
        //   console.log("success", data);
          });
	}

console.log('state',state)
console.log('state.recipe',state.state.recipe)

   return(
        <div id="recipe-card">
            <div className="recipe-head">
                <h1 className="recipe-title">{state.state.recipe.name}</h1>
                <input className="submit-button" onClick={async ()=>{
            handleDelete(state.state.recipe._id);
            navigate('/favlist')}} type='submit'  value='ⓧ'/> 
            </div>
            <img className="food-picture" src={state.state.recipe.image} alt={state.state.recipe.name}/>
            <h2 className="subtitles">Ingredients</h2>
            <ul className="ingredients-list">
                {state.state.recipe.ingredients.map((data,i)=>(
                data.name &&
                <li key={i}> 
                    <span onClick={()=>{
                // console.log('ID', state.state.recipe._id); 
                data.inStock = !data.inStock; 
                handleInStock(state.state.recipe._id);
                forceUpdate();
                }}> {data.inStock ? '✅': '❌'}</span>  {data.measure} {data.name}
                    </li>
                ))}
                    </ul>
            <h2 className="subtitles">Prep</h2>
            <p className="recipe-text">{state.state.recipe.instructions}</p>
            <input onClick={async ()=>{
            handleDelete(state.state.recipe._id);
            navigate('/favlist')}} type='submit' value='Delete'/>   
           
        </div>
    )

}



export default Favorite


//handleInStock(state.state.recipe._id)