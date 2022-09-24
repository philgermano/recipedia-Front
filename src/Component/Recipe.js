import React, {Component} from 'react'



function Recipe (props){

    const sendBack = (event) =>{
        event.preventDefault()
        fetch('http://localhost:3000/recipes',{
            method: 'POST',
            body: JSON.stringify({name: props.recipe.strMeal}),
            headers: {
                'Content-Type': 'application/json'
            }      
        }).then(res =>res.json())
        .then(resJson =>{
            console.log('NewForm - resJson', resJson)
            console.log(event,"event")
        })
      }

    return <>
        <h1>{props.recipe.strMeal}</h1>
        <img src={props.recipe.strMealThumb} alt={props.recipe.strMeal}/>
            
            <input onClick={sendBack} type='submit' value='Favorite'/>
               
            </>
        
    


}



export default Recipe