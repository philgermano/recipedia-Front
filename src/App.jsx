import React, {Component, Fragment} from 'react';
import {Outlet, Link} from "react-router-dom";
import './App.css';
import Recipe from './Component/Recipe';
import Search from './Component/Search';

// ALL this is in the index.js for now. 

// class App extends Component {
//   constructor(props){
//   super(props)
//     this.state = {
//       //base url  plus additions in order of additions 
//       baseURL: 'https://www.themealdb.com/api/json/v1/',
//       query: '/search.php?s=',
//       queryDetail: '',
//       apikey: `${process.env.REACT_APP_API_KEY}`,
//       searchURL: '',
//      //to do figure out how would we want to set up the 
//   }
//   }
// //sets this.queryDetail as current search box
// handleChange= (event) =>{
//   this.setState({[event.target.id]: event.target.value})
// }

// //assembles search url and detches the results
// handleSubmit = (event) =>{
//   //stops page reload
//   event.preventDefault()
// this.setState({
//     //assembles search URL
//     searchURL:this.state.baseURL + this.state. apikey +  this.state.query + this.state.queryDetail 
// }, () =>{
//     //FETCH request stuff 
//     fetch(this.state.searchURL)
//           .then(response =>{return response.json()})
//           .then(json => this.setState({recipes:json}),
//           (err) => console.log(err))
//           .then(console.log(this.state.recipes))
//           .then(console.log(this.sendBack))
// })
// }


// render() {
//   return (
//     <div>
//       <h1>Recipedia!</h1>
//         <nav   style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}>
//             <Link to="/" className='text-link' >Home</Link>
//             <Link to="/about" className='text-link'>About</Link>    
//             <Link to="/something" className='text-link'>Something</Link>
//             <Link to="/search" className='text-link'>Search</Link>
//          </nav>
//          <Outlet />
//     </div>
//   );

//   }
// }


export default App;
