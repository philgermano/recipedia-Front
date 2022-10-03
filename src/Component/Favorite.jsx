import React, {Component} from 'react'
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
//This is all old stuff

function Favorite (props){
    //imports information passed from search page
const state = useLocation();
let navigate = useNavigate();


const handleDelete =(id) =>{
    fetch(`${process.env.REACT_APP_BACKEND_URL}` + '/' + id, {
        method: 'DELETE', 
    });
        

    }

console.log('state',state)
console.log('state.recipe',state.state.recipe)

    return( <>
      <h1>this is a favorite recipe </h1>
        <h1>{state.state.recipe.name}</h1>

            


        <input onClick={async ()=>{
            handleDelete(state.state.recipe._id);
            navigate('/favlist', {state:{updateData:!updateData}})}} type='submit' value='Delete'/>   
           
            

              
            </>
        
    
    )

}



export default Favorite
