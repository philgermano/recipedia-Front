import {React, Component} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import './index.css';

import About from './routes/about'
import Search from './Component/Search';
import Something from './routes/something';
import Recipe from './Component/Recipe';

class App extends Component {
  constructor(props){
  super(props)
    this.state = {
      //base url  plus additions in order of additions 
      baseURL: 'https://www.themealdb.com/api/json/v1/',
      query: '/search.php?s=',
      queryDetail: '',
      apiKey: `${process.env.REACT_APP_API_KEY}`,
      searchURL: '',
     //to do figure out how would we want to set up the 
  }
  }
//sets this.queryDetail as current search box
handleChange= (event) =>{
  this.setState({[event.target.id]: event.target.value})
}

//assembles search url and detches the results
handleSubmit = (event) =>{
  //stops page reload
  event.preventDefault()
this.setState({
    //assembles search URL
    searchURL:this.state.baseURL + this.state. apikey +  this.state.query + this.state.queryDetail 
}, () =>{
    //FETCH request stuff 
    fetch(this.state.searchURL)
          .then(response =>{return response.json()})
          .then(json => this.setState({recipes:json}),
          (err) => console.log(err))
          .then(console.log(this.state.recipes))
          .then(console.log(this.sendBack))
})
}


render() {
  return (
    <div>
      <h1>Recipedia!</h1>
        <nav   style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
            <Link to="/" className='text-link' >Home</Link>
            <Link to="/about" className='text-link'  state={
              {dumb:this.state.baseURL ,
               what:"hello",
               apiKey: `${process.env.REACT_APP_API_KEY}`}
              }>About</Link>    
            <Link to="/something"  className='text-link' >Something</Link>
            <Link to="/search" className='text-link' state={{baseURL: this.state.baseURL,
              apiKey: `${process.env.REACT_APP_API_KEY}`,
              query: this.state.query,
              key: '1'}}>Search</Link>
          </nav>
         <Outlet />
    </div>
  );

  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="about"  element={<About  />} />
       <Route path="something" element={<Something   />} /> 
       <Route path="search" element={<Search />} />
       <Route path="recipe" element={<Recipe />}/>
       <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Route>
    </Routes>
  </BrowserRouter>
  
);


