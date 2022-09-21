import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
  super(props)
    this.state = {
      //base url  plus additions in order of additions 
      baseURL: 'https://api.edamam.com/api/recipes/v2?type=public',
      query: '&q=',
      queryDetail: '',
      apikey: `&app_id=${REACT_APP_API_KEY}`,
      app_key: `&app_key=${REACT_APP_APP_KEY}`,
     searchURL: '',
     //to do figure out how would we want to set up the 
  }
  }
render() {
    return (
      <div>

      </div>
    )

}

}

export default App;
