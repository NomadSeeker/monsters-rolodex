import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component { //if removed Component from the import then could include it here by React.Component 

  constructor(){
     super();
     this.state = {
       monsters: [],
       searchField: ''
       
     };
  }

  componentDidMount(){ //This is a lyfecycled method which allows to do the function and mount it when is called
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users=> this.setState({monsters: users})); //fetch from the url provided and bring in the response the array in json format and then fill the array of monsters with the json
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { monsters, searchField } =  this.state;
    //The above code is a shorter way of sayin: 
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
      //onChange={e => this.setState({searchField: e.target.value}, ()=> console.log(this.state) Esto hace que imprima de manera sincrona el valor que se esta poniendo en el input sin retraso.
      //The SearchBox item replaced this div: <input type='search' placeholder='search monster' onChange={e => this.setState({searchField: e.target.value})}/> 
     <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}></CardList>
      
      </div>
      
    );
}
}

export default App;
