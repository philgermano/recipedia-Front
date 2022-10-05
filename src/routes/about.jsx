import { useLocation } from "react-router-dom";
import React from "react";


function About (props){
  const {state} = useLocation();
console.log(state)

    return (
    <main style={{ padding: "1rem 0" }}>
    <h2>About {state.dumb} {state.what} {state.apiKey} </h2>
  </main>
    )
}

export default About
