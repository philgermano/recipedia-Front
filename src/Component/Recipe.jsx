import React, {Component} from 'react'
import {useLocation} from 'react-router-dom'
//This is all old stuff

function Recipe (props){
    //imports information passed from search page
const state = useLocation();

    const sendBack = (event) =>{
        event.preventDefault()
        fetch('https://recipedia-ga-team1.herokuapp.com/recipes',{
            method: 'POST',
            body: JSON.stringify({
                name: state.state.recipe.strMeal,
                image: state.state.recipe.strMealThumb,
                ingredients:[{name: state.state.recipe.strIngredient1, measure: state.state.recipe.strMeasure1
                },
                {name: state.state.recipe.strIngredient2, measure: state.state.recipe.strMeasure2
                },
                {name: state.state.recipe.strIngredient3, measure: state.state.recipe.strMeasure3
                },
                {name: state.state.recipe.strIngredient4, measure: state.state.recipe.strMeasure4
                },
                {name: state.state.recipe.strIngredient5, measure: state.state.recipe.strMeasure5
                },
                {name: state.state.recipe.strIngredient6, measure: state.state.recipe.strMeasure6
                },
                {name: state.state.recipe.strIngredient7, measure: state.state.recipe.strMeasure7
                },
                {name: state.state.recipe.strIngredient8, measure: state.state.recipe.strMeasure8
                },
                {name: state.state.recipe.strIngredient9, measure: state.state.recipe.strMeasure9
                },
                {name: state.state.recipe.strIngredient10, measure: state.state.recipe.strMeasure10
                },
                {name: state.state.recipe.strIngredient11, measure: state.state.recipe.strMeasure11
                },
                {name: state.state.recipe.strIngredient12, measure: state.state.recipe.strMeasure12
                },
                {name: state.state.recipe.strIngredient13, measure: state.state.recipe.strMeasure13
                },
                {name: state.state.recipe.strIngredient14, measure: state.state.recipe.strMeasure14
                },
                {name: state.state.recipe.strIngredient15, measure: state.state.recipe.strMeasure15
                },
                {name: state.state.recipe.strIngredient16, measure: state.state.recipe.strMeasure16
                },
                {name: state.state.recipe.strIngredient17, measure: state.state.recipe.strMeasure17
                },
                {name: state.state.recipe.strIngredient18, measure: state.state.recipe.strMeasure18
                },
                {name: state.state.recipe.strIngredient19, measure: state.state.recipe.strMeasure19
                },
                {name: state.state.recipe.strIngredient20, measure: state.state.recipe.strMeasure20
                }],
                instructions: state.state.recipe.strInstructions
            }),
            headers: {
                'Content-Type': 'application/json'
            }      
        }).then(res =>res.json())
        .then(resJson =>{
            console.log('NewForm - resJson', resJson)
            console.log(event,"event")
        })
      }


console.log('state',state)
console.log('state.recipe',state.state.recipe)

return(
    <div id="recipe-card">
        <div class="recipe-head">
            <h1 class="recipe-title">{state.state.recipe.strMeal}</h1>
            <input class="submit-button" onClick={sendBack} type='submit' value='♡'/>
        </div>
        <img class="food-picture" src={state.state.recipe.strMealThumb} alt={state.state.recipe.strMeal}/>
        <p class="recipe-text">{state.state.recipe.strInstructions}</p>
    </div>
)

}



export default Recipe