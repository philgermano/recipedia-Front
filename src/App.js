import React, {Component} from 'react';
import './App.css';
import Recipe from './Component/Recipe'



class App extends Component {
  constructor(props){
  super(props)
    this.state = {
      //base url  plus additions in order of additions 
      baseURL: 'https://api.edamam.com/api/recipes/v2?type=public',
      query: '&q=',
      queryDetail: '',
      apikey: `&app_id=${process.env.REACT_APP_API_KEY}`,
      app_key: `&app_key=${process.env.REACT_APP_APP_KEY}`,
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
    searchURL:this.state.baseURL + this.state.query + this.state.queryDetail + this.state. apikey + this.state.app_key 
}, () =>{
    //FETCH request stuff 
    fetch(this.state.searchURL)
          .then(response =>{return response.json()})
          .then(json => this.setState({recipes:json}),
          (err) => console.log(err))
          .then(console.log(this.state.recipes))

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
 

    this.state.recipes.hits.map((data,i)=><Recipe data={data} key={i}/>
    )
}
</div>
   )

  }
}
export default App;
