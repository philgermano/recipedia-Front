import React, {Component} from 'react';
import './App.css';
import Recipe from './Component/Recipe'


class App extends Component {
  constructor(props){
  super(props)
    this.state = {
      //base url  plus additions in order of additions 
      baseURL: 'https://www.themealdb.com/api/json/v1/',
      query: '/search.php?s=',
      queryDetail: '',
      apikey: `${process.env.REACT_APP_API_KEY}`,
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
sendBack = (event) =>{
  event.preventDefault()
  fetch('http://localhost:3000/recipes',{
      method: 'POST',
      body: JSON.stringify({name: "sending"}),
      headers: {
          'Content-Type': 'application/json'
      }      
  }).then(res =>res.json())
  .then(resJson =>{
      console.log('NewForm - resJson', resJson)
  })
}


render() {
    return (
      <div>
        {/* form for query */}
<form onSubmit={this.handleSubmit}>
    <label htmlFor="queryDetail">Recipe</label>
        <input
          id='queryDetail'
          type='text'
          value={this.state.queryDetail}
          onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Find Recipes'
            />
</form>
            <a href={this.state.searchURL}>{this.state.searchURL}</a>
            
                      {this.state.recipes&&



          this.state.recipes.meals.map((data,i)=>
          <Recipe sendBack={this.sendBack} recipe={data} key={i}/>
          )
          }
</div>
   )

  }
}
export default App;
