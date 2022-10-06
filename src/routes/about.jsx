import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import AboutNav from "./AboutNav";



function About (props){
  const {state} = useLocation();
console.log(state)

    return (
    <main style={{ padding: "1rem 0" }}>
    <h2>About </h2>
    <p>
      This site was made by the developers Carlos, Clara and Phil.
      This app was intended to do a search into an API and fetch recipes based on user's search. 
      If you favorite a recipe, you can check the item on the list of ingredients, if you have it or not.

      See more about the developers below
    </p>
	<AboutNav/>
<Outlet/>
  </main>
    )
}

export default About

