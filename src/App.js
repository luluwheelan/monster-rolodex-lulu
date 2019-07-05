import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';



class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceHolder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters: users})); 
  }
//This arow function will bind the function to the event automaticlly
  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render(){
    // deconstructor
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
         placeholder='search monsters'
         handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonsters}>
        
        </CardList>
        
      </div>
    );
  }
}


export default App;
