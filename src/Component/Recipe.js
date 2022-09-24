import React, {Component} from 'react'



function Recipe (props){

    const sendBack = (event) =>{
        event.preventDefault()
        fetch('http://recipedia-ga-team1.herokuapp.com/recipes',{
            method: 'POST',
            body: JSON.stringify({
                name: props.recipe.strMeal,
                image: props.recipe.strMealThumb,
                ingredients:[{name: props.recipe.strIngredient1, measure: props.recipe.strMeasure1
                },
                {name: props.recipe.strIngredient2, measure: props.recipe.strMeasure2
                },
                {name: props.recipe.strIngredient3, measure: props.recipe.strMeasure3
                },
                {name: props.recipe.strIngredient4, measure: props.recipe.strMeasure4
                },
                {name: props.recipe.strIngredient5, measure: props.recipe.strMeasure5
                },
                {name: props.recipe.strIngredient6, measure: props.recipe.strMeasure6
                },
                {name: props.recipe.strIngredient7, measure: props.recipe.strMeasure7
                },
                {name: props.recipe.strIngredient8, measure: props.recipe.strMeasure8
                },
                {name: props.recipe.strIngredient9, measure: props.recipe.strMeasure9
                },
                {name: props.recipe.strIngredient10, measure: props.recipe.strMeasure10
                },
                {name: props.recipe.strIngredient11, measure: props.recipe.strMeasure11
                },
                {name: props.recipe.strIngredient12, measure: props.recipe.strMeasure12
                },
                {name: props.recipe.strIngredient13, measure: props.recipe.strMeasure13
                },
                {name: props.recipe.strIngredient14, measure: props.recipe.strMeasure14
                },
                {name: props.recipe.strIngredient15, measure: props.recipe.strMeasure15
                },
                {name: props.recipe.strIngredient16, measure: props.recipe.strMeasure16
                },
                {name: props.recipe.strIngredient17, measure: props.recipe.strMeasure17
                },
                {name: props.recipe.strIngredient18, measure: props.recipe.strMeasure18
                },
                {name: props.recipe.strIngredient19, measure: props.recipe.strMeasure19
                },
                {name: props.recipe.strIngredient20, measure: props.recipe.strMeasure20
                }],
                instructions: props.recipe.strInstructions
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

    return <>
        <h1>{props.recipe.strMeal}</h1>
        <img src={props.recipe.strMealThumb} alt={props.recipe.strMeal}/>
            
            <input onClick={sendBack} type='submit' value='Favorite'/>
               
            </>
        
    


}



export default Recipe