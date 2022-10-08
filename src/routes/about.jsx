import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import AboutNav from "./AboutNav";



function About (props){
  const {state} = useLocation();
console.log(state)

    return (
    <main style={{ padding: "1rem 0" }}>
    <div className="about-text">
    <p>
    This site was made by the developers Carlos, Clara, and Phil.
    This app was built to track recipes and their ingredients. You can search a database for recipes and favorite ones to revisit later on. You can mark whether or not you have the items on the list of ingredients if you favorite the recipe. See more about the developers below.
    See more about the developers below:
    </p>
    </div>
  <AboutNav/>
  </main>
    )
}

export default About

