import React, {Component, useState} from 'react'
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import '../App.css'


function Favorite (props){
    //imports information passed from search page
const state = useLocation();
let navigate = useNavigate();


const handleDelete =(id) =>{
    fetch(`${process.env.REACT_APP_BACKEND_URL}` + '/' + id, {
        method: 'DELETE', 
    })
    }

    const handleInStock=(id) =>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}` + '/' + id, {
            method: 'Put',
            body: JSON.stringify({recipe: !state.state.recipe} ),
			headers:{
				'Content-Type': 'application/json'
			}
        })
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
                <li onClick={()=>{ data.inStock = !data.inStock; handleInStock(data._id)
                }}> 
                        {data.inStock ? '✅': '❌'}  {data.measure} {data.name}
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