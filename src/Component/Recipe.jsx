import React, {Component} from 'react'
import {useLocation} from 'react-router-dom'
import '../App.css'
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
            <div className="recipe-head">
                <h1 className="recipe-title">{state.state.recipe.strMeal}</h1>
                <input className="submit-button" onClick={sendBack} type='submit' value='♡'/> 
            </div>
            <img className="food-picture" src={state.state.recipe.strMealThumb} alt={state.state.recipe.strMeal}/>
            <h2 className="subtitles">Ingredients</h2>
            <ul className="ingredients-list">
                {state.state.recipe.strMeasure1 ?
                    <li>{state.state.recipe.strMeasure1} {state.state.recipe.strIngredient1}</li>
                     :""}
                {state.state.recipe.strMeasure2 ?
                    <li>{state.state.recipe.strMeasure2} {state.state.recipe.strIngredient2}</li>
                     :""}
                {state.state.recipe.strMeasure3 ?
                    <li>{state.state.recipe.strMeasure3} {state.state.recipe.strIngredient3}</li>
                     :""}
                {state.state.recipe.strMeasure4 ?
                    <li>{state.state.recipe.strMeasure4} {state.state.recipe.strIngredient4}</li>
                     :""}
                {state.state.recipe.strMeasure5 ?
                    <li>{state.state.recipe.strMeasure5} {state.state.recipe.strIngredient5}</li>
                     :""}
                {state.state.recipe.strMeasure6 ?
                    <li>{state.state.recipe.strMeasure6} {state.state.recipe.strIngredient6}</li>
                     :""}
                {state.state.recipe.strMeasure7 ?
                    <li>{state.state.recipe.strMeasure7} {state.state.recipe.strIngredient7}</li>
                     :""}
                {state.state.recipe.strMeasure8 ?
                    <li>{state.state.recipe.strMeasure8} {state.state.recipe.strIngredient8}</li>
                     :""}
                {state.state.recipe.strMeasure9 ?
                    <li>{state.state.recipe.strMeasure9} {state.state.recipe.strIngredient9}</li>
                     :""}
                {state.state.recipe.strMeasure10 ?
                    <li>{state.state.recipe.strMeasure10} {state.state.recipe.strIngredient10}</li>
                     :""}
                {state.state.recipe.strMeasure11 ?
                    <li>{state.state.recipe.strMeasure11} {state.state.recipe.strIngredient11}</li>
                     :""}
                {state.state.recipe.strMeasure12 ?
                    <li>{state.state.recipe.strMeasure12} {state.state.recipe.strIngredient12}</li>
                     :""}
                {state.state.recipe.strMeasure13 ?
                    <li>{state.state.recipe.strMeasure13} {state.state.recipe.strIngredient13}</li>
                     :""}
                {state.state.recipe.strMeasure14 ?
                    <li>{state.state.recipe.strMeasure14} {state.state.recipe.strIngredient14}</li>
                     :""}
                {state.state.recipe.strMeasure15 ?
                    <li>{state.state.recipe.strMeasure15} {state.state.recipe.strIngredient15}</li>
                     :""}
                {state.state.recipe.strMeasure16 ?
                    <li>{state.state.recipe.strMeasure16} {state.state.recipe.strIngredient16}</li>
                     :""}
                {state.state.recipe.strMeasure17 ?
                    <li>{state.state.recipe.strMeasure17} {state.state.recipe.strIngredient17}</li>
                     :""}
                {state.state.recipe.strMeasure18 ?
                    <li>{state.state.recipe.strMeasure18} {state.state.recipe.strIngredient18}</li>
                     :""}
                {state.state.recipe.strMeasure19?
                    <li>{state.state.recipe.strMeasure19} {state.state.recipe.strIngredient19}</li>
                     :""}
                {state.state.recipe.strMeasure20 ?
                    <li>{state.state.recipe.strMeasure20} {state.state.recipe.strIngredient20}</li>
                     :""}
                    </ul>
            <h2 className="subtitles">Prep</h2>
            <p className="recipe-text">{state.state.recipe.strInstructions}</p>
        </div>
    )

}

export default Recipe